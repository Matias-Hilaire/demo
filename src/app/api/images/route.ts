import { NextResponse } from 'next/server';
import { db } from '@/app/db';
import { imagesTable } from '@/app/db/schema';
import { eq } from 'drizzle-orm';

// Handler para POST (insertar una imagen)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { propertyId, url, description } = body;

    // Validaciones básicas
    if (!propertyId || !url) {
      return NextResponse.json({ message: 'Property ID y URL son requeridos' }, { status: 400 });
    }

    // Insertar imagen en la base de datos
    await db.insert(imagesTable).values({
      propertyId,
      url,
      description,
    });

    return NextResponse.json({ message: 'Imagen cargada exitosamente' }, { status: 201 });
  } catch (error) {
    console.error('Error al cargar la imagen:', error);
    return NextResponse.json({ message: 'Error al cargar la imagen' }, { status: 500 });
  }
}

// Handler para GET (obtener imágenes)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const propertyId = searchParams.get('propertyId');

  try {
    // Si se proporciona un `propertyId`, obtener las imágenes relacionadas a esa propiedad
    if (propertyId) {
      const images = await db
        .select()
        .from(imagesTable)
        .where(eq(imagesTable.propertyId, parseInt(propertyId)));

      return NextResponse.json(images, { status: 200 });
    } else {
      // Si no se proporciona `propertyId`, devolver todas las imágenes
      const allImages = await db.select().from(imagesTable);
      return NextResponse.json(allImages, { status: 200 });
    }
  } catch (error) {
    console.error('Error al obtener las imágenes:', error);
    return NextResponse.json({ message: 'Error al obtener las imágenes' }, { status: 500 });
  }
}
