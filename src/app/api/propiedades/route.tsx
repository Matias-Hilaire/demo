// pages/api/properties.js
import { db } from '@/app/db'; // Asegúrate de configurar tu conexión a la base de datos
import { propertiesTable } from '@/app/db/schema'; // Referencia a la tabla de propiedades

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { address, price, size, bedrooms, description, typeId } = req.body;

    try {
      // Insertar en la base de datos
      await db.insert(propertiesTable).values({
        address,
        price,
        size,
        bedrooms,
        description,
        typeId,
        createdAt: new Date(),
      });

      return res.status(200).json({ message: 'Propiedad cargada exitosamente' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al cargar la propiedad' });
    }
  } else {
    return res.status(405).json({ message: 'Método no permitido' });
  }
}
