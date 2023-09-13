import {
  Injectable,
  BadRequestException,
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserRepository } from './user.repository';
import { UserInterface } from './interfaces/user.interface';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { FilterQuery } from 'mongoose';

@Injectable()
export class UserService {
  private user: UserInterface;
  constructor(protected readonly userRepository: UserRepository) {}

  async findUser(
    userData: FilterQuery<UserInterface>,
    projection?: any,
  ): Promise<UserInterface> {
    return await this.userRepository.findOne(userData, projection);
  }

  async getUsers(): Promise<UserInterface[]> {
    return this.userRepository.find(
      {},
      { _id: 1, password: 0, refreshToken: 0 },
    );
  }

  async createUser(createUserData: CreateUserDto): Promise<UserInterface> {
    const { name, email, gender, occupation } = createUserData;

    const duplicate = await this.findUser({ email });
    console.log(duplicate);
    if (duplicate)
      throw new ConflictException({
        message: `User with email ${email} already exist.`,
      });
    // create and save new User
    const userData = {
      ...createUserData,
    };
    return this.userRepository.create(userData);
  }

  async updateUser(
    userId: string,
    updateUserData: UpdateUserDto,
  ): Promise<UserInterface> {
    return this.userRepository.findOneAndUpdate(
      { _id: userId },
      updateUserData,
    );
  }

  async deleteUserById(userId: string): Promise<boolean> {
    return this.userRepository.deleteOne({ _id: userId });
  }

  async deleteManyUsers(userIds: string): Promise<boolean> {
    return this.userRepository.deleteMany({ _id: userIds });
  }
}
