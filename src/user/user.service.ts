import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './entities/user.entity';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, wrap } from '@mikro-orm/core';
// import { InjectRepository } from '@nestjs/typeorm';
// import { UserRepository } from './repo/user.repository';
import { EntityManager } from '@mikro-orm/postgresql';



@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: EntityRepository<User>,
    private readonly em: EntityManager
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.age = createUserDto.age;
    const newUser = this.userRepository.create(user);
    await this.em.persistAndFlush(newUser);
    return newUser;
  }

  findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  findOne(id: number) {
    return this.userRepository.findOne({ id: id });
  }
  async update(id: number, updateUserDto: UpdateUserDto) {
    const existingUser = await this.findOne(id);
    wrap(existingUser).assign(updateUserDto);
    await this.em.persistAndFlush(existingUser);
    return existingUser;
  }

  async remove(id: number) {
    const post = await this.findOne(id);
    return this.em.removeAndFlush(post);
  }
}
