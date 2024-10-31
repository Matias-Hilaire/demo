import { db } from '@/app/db'; 
import { imagesTable } from '@/app/db/schema';
import multer from 'multer';
import { NextResponse } from 'next/server';

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads', 
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  return new Promise((resolve, reject) => {
    upload.single('image')(req, {}, async (err) => {
      if (err) {
        console.error('Error al subir la imagen:', err);
        return resolve(NextResponse.json({ message: 'Error al subir la imagen' }, { status: 500 }));
      }

      try {
        const { propertyId, description } = req.body;
        const imageUrl = `/uploads/${req.file.filename}`;

        const dbInstance = db(); 
        await dbInstance.insert(imagesTable).values({
          propertyId: parseInt(propertyId),
          url: imageUrl,
          description: description || null,
        });

        resolve(NextResponse.json({ message: 'Imagen subida exitosamente' }, { status: 200 }));
      } catch (error) {
        console.error('Error al insertar en la base de datos:', error);
        resolve(NextResponse.json({ message: 'Error al insertar en la base de datos' }, { status: 500 }));
      }
    });
  });
}
