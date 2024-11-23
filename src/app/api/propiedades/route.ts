import { NextResponse } from 'next/server';
import { db } from '@/app/db';
import { propertiesTable, imagesTable } from '@/app/db/schema';
import { eq } from 'drizzle-orm';

// Obtener todas las propiedades
export async function GET() {
  try {
    const properties = await db.select().from(propertiesTable).all();

    return NextResponse.json(properties);
  } catch (error) {
    console.error('Error al obtener propiedades:', error);
    return NextResponse.json({ error: 'Error al obtener propiedades' }, { status: 500 });
  }
}

// Crear una nueva propiedad
export async function POST(request: Request) {
  try {
    const { address, price, size, bedrooms, description, typeId, images } =
      await request.json();

    if (!address || !price || !size || !bedrooms || !description || !typeId) {
      return NextResponse.json(
        { error: 'Faltan datos obligatorios.' },
        { status: 400 }
      );
    }

    // Insertar la propiedad en la base de datos
    const [newProperty] = await db
      .insert(propertiesTable)
      .values({
        address,
        price,
        size,
        bedrooms,
        description,
        typeId,
      })
      .returning();

    // Insertar las imágenes asociadas (si existen)
    if (images && Array.isArray(images)) {
      const imageEntries = images.map((img: { url: string; description: string }) => ({
        propertyId: newProperty.id,
        url: img.url,
        description: img.description,
      }));

      await db.insert(imagesTable).values(imageEntries);
    }

    return NextResponse.json(newProperty);
  } catch (error) {
    console.error('Error al crear propiedad:', error);
    return NextResponse.json({ error: 'Error al crear propiedad' }, { status: 500 });
  }
}

// Actualizar una propiedad
export async function PUT(request: Request) {
  try {
    const { id, address, price, size, bedrooms, description, typeId } =
      await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Debe proporcionar un ID.' }, { status: 400 });
    }

    const updatedProperty = await db
      .update(propertiesTable)
      .set({ address, price, size, bedrooms, description, typeId })
      .where(eq(propertiesTable.id, id))
      .returning();

    return NextResponse.json(updatedProperty);
  } catch (error) {
    console.error('Error al actualizar propiedad:', error);
    return NextResponse.json({ error: 'Error al actualizar propiedad' }, { status: 500 });
  }
}

// Eliminar una propiedad
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Debe proporcionar un ID.' }, { status: 400 });
    }

    // Eliminar imágenes asociadas
    await db.delete(imagesTable).where(eq(imagesTable.propertyId, id));

    // Eliminar la propiedad
    await db.delete(propertiesTable).where(eq(propertiesTable.id, id));

    return NextResponse.json({ message: 'Propiedad eliminada exitosamente.' });
  } catch (error) {
    console.error('Error al eliminar propiedad:', error);
    return NextResponse.json({ error: 'Error al eliminar propiedad' }, { status: 500 });
  }
}
