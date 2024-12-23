import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriasModule } from './categorias/categorias.module';
import { ClientesModule } from './clientes/clientes.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { ProductosModule } from './productos/productos.module';
import { VentasModule } from './ventas/ventas.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PromocionesModule } from './promociones/promociones.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { PagosModule } from './pagos/pagos.module';
import { DetallesVentasModule } from './detalles-ventas/detalles-ventas.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '*/**/entities/*.{ts|js}'],
      synchronize: true,
      autoLoadEntities: true,
      ssl: { rejectUnauthorized: false}
    }),
    CategoriasModule,
    ClientesModule,
    EmpleadosModule,
    ProductosModule,
    VentasModule,
    UsuariosModule,
    PromocionesModule,
    ProveedoresModule,
    PagosModule,
    DetallesVentasModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
