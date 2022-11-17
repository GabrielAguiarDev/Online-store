import Image from "next/image";

import { InfoProfile } from "./styles";

import { BiPhone } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";

export default function indexProfile({ user }) {
  console.log(user)
  return (
    <InfoProfile>
      {user.image ? (
        <div className="container-user">
            <div className="imageProfile">
              <Image
                src={user.image}
                width="150px"
                height="150px"
                alt="Foto de perfil"
              />
              <h3>{user.name}</h3>
              <div className="wallet">
                {user.wallet}
                <span>Minha carteira</span>
            </div>
            </div>
        </div>
      ) : (
        <div className="container-user">
          <div className="imageDefault">
            <BsPersonFill />
          </div>
          <h3>{user.name}</h3>
        <div className="wallet">
            {Number(user.wallet).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
            <span>Minha carteira</span>
        </div>
        </div>
      )}
      <div className="container-info">
        <div className="info">
          <BsPersonFill />
          <div className="info-data">
            <span>Nome de usuário</span>
            <span>{user.username}</span>
          </div>
        </div>
        <div className="info">
          <BiPhone />
          <div className="info-data">
            <span>Número de telefone</span>
            <span>{user.phone}</span>
          </div>
        </div>
        <div className="info">
          <MdEmail />
          <div className="info-data">
            <span>E-mail</span>
            <span>{user.email}</span>
          </div>
        </div>
        <div className="info">
          <ImLocation />
          <div className="info-data">
            <span>Endereço</span>
            <span>{user.address}</span>
          </div>
        </div>
      </div>
    </InfoProfile>
  );
}
