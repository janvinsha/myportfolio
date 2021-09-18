import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    background:${({ theme }) => (theme ? "#0f0f0f" : "#ffffff")};
    font-family: 'Playfair Display', serif;
font-family: 'Roboto', sans-serif;
    overflow-x:hidden;
    color:white;
    transition:0.3s ease-in-out;
}
button{
}input{
    color:${({ theme }) => (theme ? "white" : "black")};
    &:focus{
outline:none;
border: 0.5px solid ${({ theme }) => (theme ? "grey" : "black")};
box-shadow:0px 0px 1.5px 1.5px #50C1E9
    }
}
select{
    cursor:pointer;
      &:focus {
            outline: none;
            border: 0.5px solid
              ${({ theme }) => (theme ? "grey" : "#cecece")};
            box-shadow: 0px 0px 1.5px 1.5px #50c1e9;
          }
}
h2{
        font-weight:lighter;
        font-size:2.2rem;
        font-weight:normal;
        color:${({ theme }) => (theme ? "white" : "black")};
        @media (max-width: 900px) {
            font-weight:normal;
            font-size:1.5rem;
        }
    }
    h3{

        color:white;
        color:${({ theme }) => (theme ? "white" : "black")};
        font-weight:normal;
        @media (max-width: 900px) {
            font-weight:normal;
        }
    }
    h4{

        font-weight:bold;
      font-size:2rem;
      font-weight:normal;
      color:${({ theme }) => (theme ? "white" : "black")};
      @media (max-width: 900px) {
            font-weight:normal;
            font-size:1rem;
        }
    }
    span{
        color:${({ theme }) => (theme ? "white" : "black")};
    }
    a{
      
        text-decoration:none;
        color:${({ theme }) => (theme ? "white" : "black")};
        &:hover{
            color:#50C1E9
        }
    }
    p{
        padding:3rem 0rem;
        color:#ccc;
        font-size:1.4rem;
        line-height:150%;
    }
`;
export default GlobalStyle;
