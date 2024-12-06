import { db } from '@/app/db';
import { propertiesTable, imagesTable } from '@/app/db/schema';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { address, price, size, bedrooms, description, typeId, latitude, longitude } = req.body;

      if (!address || !price || !size || !bedrooms || !description || !typeId || !latitude || !longitude) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
      }

      const result = await db.insert(propertiesTable).values({
        address,
        price,
        size,
        bedrooms,
        description,
        typeId,
        latitude,
        longitude,
      });

      return res.status(201).json({ message: 'Propiedad agregada con éxito.', propertyId: result.insertId });
    } catch (error) {
      console.error('Error al agregar la propiedad:', error);
      return res.status(500).json({ error: 'Error al agregar la propiedad.' });
    }
  } else {
    return res.status(405).json({ error: 'Método no permitido.' });
  }
}
