/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./DTO/create-user.dto";

@Controller('login')
export class UserController {

  @Post()
  async createUser(@Body() body: CreateUserDTO) {
    return {body};
  }

  @Get()
  async getAll() {
    return 'getAll';
  }

  @Get(':id')
  async getByEmail(@Param() param) {
    return param;
  }

  @Put(':id')
  async updateUser(@Body() body, @Param() param) {
    return `updating ${body} no ${param}`;
  }

  @Delete(':id')
  async deleteUser(@Param() param) {
    return `${param} deleted`;
  }
}