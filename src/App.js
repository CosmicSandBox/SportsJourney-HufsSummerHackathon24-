import { Route, Routes } from "react-router-dom";

// pages
import Landing from "./pages/landing/";
import SignUp from "./pages/login/sign_up"
import Login from "./pages/login/login";
import ChangePw from "./pages/login/change_pw";
import Delete from "./pages/login/delete"
import Question from "./pages/questions/questions"
import AboutSport from "./pages/about_sport/about_sport"
import Tutorials from "./pages/tutorials/tutorials"
import TutorialSelected from "./pages/tutorial_selected/tutorial_selected"
import OtherSports from "./pages/other_sports/other_sports"


function App() {
    return (
        <div>
            <Routes>
                {/* 랜딩 페이지 */}
                <Route index element={<Landing />} />

                {/* 회원가입 페이지 */}
                <Route path="/signup" element={<SignUp/>}/>

                {/* 로그인 페이지 */}
                <Route path="/login" element={<Login/>}/>

                {/* 비밀번호 변경 페이지 */}
                <Route path="/change_pw" element={<ChangePw/>}/>

                {/* 회원 삭제 페이지 */}
                <Route path="/delete" element={<Delete/>}/>

                {/* 스포츠 성향 조사 페이지 */}
                <Route path="/questions" element={<Question />} />

                {/* 스포츠 소개 페이지 */}
                <Route path="/aboutsport" element={<AboutSport/>} />

                {/* 다른 스포츠 더 보기 */}
                <Route path="/others" element={<OtherSports/>} />

                {/* 스포츠 튜토리얼 리스트 */}
                <Route path="/tutorials" element={<Tutorials/>} />

                {/* 스포츠에 대한 특정 튜토리얼 */}
                <Route path="/tutorial_selected" element={<TutorialSelected/>} />

            </Routes>
        </div>
    );
}

export default App;
