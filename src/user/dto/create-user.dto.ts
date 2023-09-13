import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  Matches,
  Max,
  Min,
} from 'class-validator';
import {
  EMAIL_REGEX,
  PWD_REGEX,
  USER_REGEX,
} from 'src/common/utils/constants/auth.constants';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  // @Min(3)
  // @Max(100)
  @Matches(USER_REGEX, {
    message: `Invalid Name. Ensure that these requirements are met:\n
            Must be at least 3  characters. (and up to 100 characters)\n
            Must begin with  a letter\n`,
  })
  name: string;

  @IsString()
  @IsOptional()
  @IsEmail()
  @Matches(EMAIL_REGEX, {
    message: `Invalid email address. Ensure that these requirements are met:\n
                At least 10 characters (and up to 100 characters)\n
                Must begin with letter followed by @ and a provider. eg. youremail@provider.com\n
                Mustnend with a domain\n`,
  })
  email: string;

  @IsString()
  @IsOptional()
  gender: string;

  @IsString()
  @IsOptional()
  occupation: string;
}
