import { NextResponse } from 'next/server';
import { db } from '@/app/db';
import { propertiesTable } from '@/app/db/schema';
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { address, price, size, bedrooms, description, typeId } = body;

    // Inserta la propiedad
    await db.insert(propertiesTable).values({
      address,
      price,
      size,
      bedrooms,
      description,
      typeId,//quiza desp le armo una tabla (casa, dpto, terreno)
    });

    return NextResponse.json({ message: 'Propiedad cargada exitosamente' }, { status: 201 });
  } catch (error) {
    console.error('Error al cargar la propiedad:', error);
    return NextResponse.json({}, { status: 500 });
  }
}
