import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text, real } from 'drizzle-orm/sqlite-core';
import { mysqlTable, serial, varchar, int } from 'drizzle-orm/mysql-core';

// Tabla para las propiedades
export const propertiesTable = sqliteTable('properties', {
  id: integer('id').primaryKey(),
  address: text('address').notNull(),
  price: real('price').notNull(),
  size: real('size').notNull(),  
  bedrooms: integer('bedrooms').notNull(),  
  description: text('description').notNull(),  
  typeId: integer('type_id').notNull(),  
  createdAt: text('created_at')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
});

<<<<<<< Updated upstream
// // Tabla para las imágenes de las propiedades (chatgpt)
// export const imagesTable = sqliteTable('images', {
//   id: integer('id').primaryKey(),
//   propertyId: integer('property_id')
//     .notNull()
//     .references(() => propertiesTable.id, { onDelete: 'cascade' }),  // Relación con la propiedad
//   url: text('url').notNull(),  // URL de la imagen
//   description: text('description'),  // Descripción opcional de la imagen
// });

=======
// Tabla para las imágenes de las propiedades (chatgpt)
export const imagesTable = mysqlTable('images', {
  id: serial('id').primaryKey(),
  propertyId: int('property_id').notNull(),
  url: varchar('url', { length: 255 }).notNull(),
  description: varchar('description', { length: 255 }),
});
>>>>>>> Stashed changes
export type InsertProperty = typeof propertiesTable.$inferInsert;
export type SelectProperty = typeof propertiesTable.$inferSelect;

// export type InsertImage = typeof imagesTable.$inferInsert;
// export type SelectImage = typeof imagesTable.$inferSelect;
