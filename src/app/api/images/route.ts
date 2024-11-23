import { db } from '@/app/db';
import { imagesTable } from '@/app/db/schema';
import formidable from 'formidable';
import { NextResponse } from 'next/server';
import fs from 'fs/promises';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  const form = formidable({
    uploadDir: './public/uploads',
    keepExtensions: true,
  });

  return new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Error al procesar el archivo:', err);
        return resolve(
          NextResponse.json({ message: 'Error al procesar el archivo' }, { status: 500 })
        );
      }

      try {
        const { propertyId, description } = fields;
        const imageFile = files.image;

        if (!imageFile) {
          return resolve(
            NextResponse.json({ message: 'No se recibió ninguna imagen' }, { status: 400 })
          );
        }

        const imageUrl = `/uploads/${imageFile.newFilename}`;

        const dbInstance = db();
        await dbInstance.insert(imagesTable).values({
          propertyId: parseInt(propertyId as string),
          url: imageUrl,
          description: description ? String(description) : null,
        });

        resolve(NextResponse.json({ message: 'Imagen subida exitosamente' }, { status: 200 }));
      } catch (error) {
        console.error('Error al insertar en la base de datos:', error);
        resolve(
          NextResponse.json({ message: 'Error al insertar en la base de datos' }, { status: 500 })
        );
      }
    });
  });
}
