import { drizzle } from '@/app/db'; 
import { imagesTable } from '@/app/db/schema.ts';
import multer from 'multer';
import nextConnect from 'next-connect';  

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads', 
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

const handler = nextConnect();

handler.use(upload.single('image'));

handler.post(async (req, res) => {  
  try {
    const { propertyId, description } = req.body;
    const imageUrl = `/uploads/${req.file.filename}`;

    const db = drizzle();
    await db.insert(imagesTable).values({
      propertyId: parseInt(propertyId),
      url: imageUrl,
      description: description || null,
    });

    return res.status(200).json({ message: 'Imagen subida exitosamente' });
  } catch (error) {
    console.error('Error al subir la imagen:', error);
    return res.status(500).json({ message: 'Error al subir la imagen' });
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
