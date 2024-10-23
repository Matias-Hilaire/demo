import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text, real } from 'drizzle-orm/sqlite-core';

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

// Tabla para las imágenes de las propiedades (chatgpt)
export const imagesTable = sqliteTable('images', {
  id: integer('id').primaryKey(),
  propertyId: integer('property_id').notNull(),
  url: text('url', { length: 255 }).notNull(),
  description: text('description', { length: 255 }),
});
export type InsertProperty = typeof propertiesTable.$inferInsert;
export type SelectProperty = typeof propertiesTable.$inferSelect;

export type InsertImage = typeof imagesTable.$inferInsert;
export type SelectImage = typeof imagesTable.$inferSelect;
