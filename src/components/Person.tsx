import {FC, ChangeEvent, useState} from 'react';
import { User } from '../Interfaces';


export const Person: FC<User> = ({name, age, email}) => {

    const [country, setCountry] = useState<string | null>("");
    const handleChangeCountry = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value);
    }

    //type NameType = "Michael" | "Mena";
    //const nameForType: NameType = "Mena";

  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
      <input placeholder="Write down your country" onChange={handleChangeCountry}/>

      <h1>{country}</h1>
    </div>
  );
}
