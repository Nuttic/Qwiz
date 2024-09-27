import React from "react";
import media from '../../../public/photo.jpg'
import buttonHome from '../../../public/buttonHome.jpg'
import { Link } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";

const ErrorPage: React.FC = () => {
  return (
    <div
      className="error-page"
      style={{ textAlign: "center", padding: "0px", margin: "0px" }}
    >
      <h1 style={{ margin: "0px" }}>
        404
        <Link to={ROUTES.HOME}>
          <img
            title="Я ПЕРЕЖИВАЮ ЗА ВАШ ПРОЕКТ!"
            src={buttonHome}
            alt="Home"
            style={{ margin: "0px 0px 0px 50px" }}
            width={"40px"}
          />
        </Link>
      </h1>
      <p>Страница не найдена</p>
      <img src={media} style={{width: '45vw'}} alt="404 Error" />
    </div>
  );
};

export default ErrorPage;
