// import { DataSource } from 'typeorm';
// import { User } from '../entities/user.entity';

// // @EntityRepository(User)
// // export class UserRepository extends Repository<User> {
// //   async getUserByAge(age: number): Promise<User[]> {
// //     return this.find({ where: { age: age } });
// //   }
// // }

// export const UserRepository = DataSource.getRepository(User).extend({
//   findByName(firstName: string, lastName: string) {
//     return this.createQueryBuilder('user')
//       .where('user.firstName = :firstName', { firstName })
//       .andWhere('user.lastName = :lastName', { lastName })
//       .getMany();
//   },
// });
