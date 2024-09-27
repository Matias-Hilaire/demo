import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text, real } from 'drizzle-orm/sqlite-core';

// Tabla para los tipos de propiedad (e.g., casa, departamento, terreno)
export const propertyTypesTable = sqliteTable('property_types', {
  id: integer('id').primaryKey(),
  type: text('type').notNull(),  // Ejemplo: 'Casa', 'Departamento', 'Terreno'
});

// Tabla para las propiedades
export const propertiesTable = sqliteTable('properties', {
  id: integer('id').primaryKey(),
  address: text('address').notNull(),
  price: real('price').notNull(),
  size: real('size').notNull(),  // Tamaño de la propiedad en metros cuadrados
  bedrooms: integer('bedrooms').notNull(),  // Número de habitaciones
  description: text('description').notNull(),  // Breve descripción de la propiedad
  typeId: integer('type_id')
    .notNull()
    .references(() => propertyTypesTable.id, { onDelete: 'cascade' }),  // Tipo de propiedad
  createdAt: text('created_at')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
});

// Tabla para las imágenes de las propiedades
export const imagesTable = sqliteTable('images', {
  id: integer('id').primaryKey(),
  propertyId: integer('property_id')
    .notNull()
    .references(() => propertiesTable.id, { onDelete: 'cascade' }),  // Relación con la propiedad
  url: text('url').notNull(),  // URL de la imagen
  description: text('description'),  // Descripción opcional de la imagen
});

export type InsertPropertyType = typeof propertyTypesTable.$inferInsert;
export type SelectPropertyType = typeof propertyTypesTable.$inferSelect;

export type InsertProperty = typeof propertiesTable.$inferInsert;
export type SelectProperty = typeof propertiesTable.$inferSelect;

export type InsertImage = typeof imagesTable.$inferInsert;
export type SelectImage = typeof imagesTable.$inferSelect;
