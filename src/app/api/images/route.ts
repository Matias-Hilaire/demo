import { db } from '@/app/db';
import { imagesTable } from '@/app/db/schema';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid'; // Para nombres únicos de archivos
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false, // Desactiva el análisis automático del cuerpo para manejar FormData
  },
};

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // Obtén los campos necesarios
    const propertyId = formData.get('propertyId');
    const description = formData.get('description') as string;
    const imageFile = formData.get('image') as File;

    // Validaciones de campos
    if (!propertyId || !imageFile) {
      return NextResponse.json(
        { message: 'Faltan datos requeridos: propertyId o imagen.' },
        { status: 400 }
      );
    }

    // Valida el tipo de archivo
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedTypes.includes(imageFile.type)) {
      return NextResponse.json(
        { message: 'El archivo debe ser una imagen (JPEG o PNG).' },
        { status: 400 }
      );
    }

    // Generar un nombre único para la imagen
    const fileName = `${uuidv4()}-${imageFile.name}`;
    const uploadPath = path.join(process.cwd(), 'public/uploads', fileName);

    // Crear la carpeta si no existe
    const uploadDir = path.dirname(uploadPath);
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Guardar la imagen en el servidor
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    fs.writeFileSync(uploadPath, buffer);

    // Guardar la información en la base de datos
    await db.insert(imagesTable).values({
      propertyId: parseInt(propertyId.toString(), 10),
      description,
      url: `/uploads/${fileName}`,
    });

    return NextResponse.json({ message: 'Imagen cargada exitosamente' }, { status: 201 });
  } catch (error) {
    console.error('Error al procesar la imagen:', error);
    return NextResponse.json(
      { message: 'Error interno al procesar la imagen.' },
      { status: 500 }
    );
  }
}
