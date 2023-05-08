/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./DTO/create-user.dto";
import { UpdateUserDTO } from "./DTO/update-user.dto";
import { LoginUserDTO } from "./DTO/login-user.dto";

@Controller('login')
export class UserController {

  @Post('create')
  async createUser(@Body() body: CreateUserDTO) {
    return {body};
  }

  @Post()
  async loginUser(@Body() body: LoginUserDTO) {
    return {body};
  }

  @Get()
  async getAll() {
    return 'getAll';
  }

  @Put(':id')
  async updateUser(@Body() body: UpdateUserDTO, @Param('id', ParseIntPipe) param) {
    return `updating ${body} no ${param}`;
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) param) {
    return `${param} deleted`;
  }
}