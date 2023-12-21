import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
    // return 'All Users';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
    // return 'User with id  ' + id + '  found';
  }
  // @Get('age/:age')
  // getUserByAge(@Param('age') age: string) {
  //   return this.userService.getUserByAge(+age);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
    // return `User with id ${id} updated successfully with Name: ${updateUserDto.firstName} ${updateUserDto.lastName} and Age: ${updateUserDto.age}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
    // return `User with id ${id} deleted successfully`;
  }
}
