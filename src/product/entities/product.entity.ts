import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryColumn({
    generated: 'uuid',
  })
  id: string;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column()
  created_at?: Date;

  @Column()
  updated_at?: Date;
}
