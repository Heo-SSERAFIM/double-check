import { React, useState } from "react";
import { styled, css } from "styled-components";
import axios from "axios";
const Main = styled.div`
  padding: 1em 6em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const Section = styled.div`
  width: 100%;
  margin-bottom: 100px;
  color: var(--black, #000);

  font-family: Pretendard;
  font-size: 1.2em;
  font-weight: 700;
  line-height: normal;
`;
const InputBox = styled.div`
  width: 100%;
  height: 44px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--ain, #3a42bf);
  margin: 22px 0;
  color: var(--ain, #3a42bf);

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  box-shadow: 0px 8px 25px 0px rgba(13, 10, 44, 0.06);

  ${(props) =>
    props.isClicked &&
    css`
      background-color: #3a42bf;
    `}
`;
const Input = styled.input`
  border: none;
  width: 100%;
  outline: none;

  font-family: Pretendard;
  font-size: 0.7em;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  ::placeholder {
    color: #3a42bf;
  }
  background: none;
  color: #fff;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Img = styled.img`
  width: 13px;
  cursor: pointer; /* 이미지에 마우스 포인터를 변경해 클릭 가능한 것처럼 보이게 함 */
`;
function SearchTab() {
  const [urlData, setUrlData] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [imgSrc, setImgSrc] = useState("./search.png");

  function handleClick() {
    setIsClicked(true);
    setImgSrc("./searchW.png");
  }

  const handleUrl = (e) => {
    setUrlData(e.target.value);
  };

  const postUrl = (e) => {
    e.preventDefault();

    const jsonData = JSON.stringify({ youtube_url: urlData });

    axios
      .post("http://127.0.0.1:8000/verify/", jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("작성 실패");
        console.log(error.message);
        console.log(error);
        if (error.response && error.response.data) {
          console.log(error.response.data);
        }
      });
  };

  return (
    <Main>
      <Section>
        <p>사실 여부를 판단하고자 하는 </p>
        <p>미디어의 링크를 붙여 넣어 주세요</p>
        <InputBox isClicked={isClicked}>
          <Input
            onChange={handleUrl}
            onClick={handleClick}
            placeholder="링크를 입력하세요"
          ></Input>
          <Img src={imgSrc} onClick={postUrl} />
        </InputBox>
      </Section>
    </Main>
  );
}

export default SearchTab;