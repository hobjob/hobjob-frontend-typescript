import React from "react";
import {Link} from "react-router-dom";

import {CoursePageLessonsVideo, CoursePageLessonsItem} from "../";

import {checkDeclension} from "../../Functions/checkDeclension";

import {CourseGoodLessons} from "../../models/ICourseGood";

interface CoursePageLessonsProps {
    lessons: CourseGoodLessons[];
    _id: string;
    isLogin: boolean;
    isAdd: boolean;
    onClickAddCourse: (Navigate: string) => void;
}

const CoursePageLessons: React.FC<CoursePageLessonsProps> = ({
    lessons,
    _id,
    isLogin,
    isAdd,
    onClickAddCourse,
}) => {
    const [videoPlaecholder, setVideoPlaecholder] =
        React.useState<boolean>(false);
    const [videoPlaecholderAnimateClose, setVideoPlaecholderAnimateClose] =
        React.useState<boolean>(false);

    const openVideoPlaecholder = () => {
        setVideoPlaecholder(true);
    };

    const closeVideoPlaecholder = () => {
        setVideoPlaecholderAnimateClose(true);

        setTimeout(() => {
            setVideoPlaecholderAnimateClose(false);
            setVideoPlaecholder(false);
        }, 180);
    };

    return (
        <section className="course-page-lessons">
            <div className="container">
                <div className="course-page-lessons-wrapper">
                    <div
                        className={`course-page-lessons-video ${
                            videoPlaecholder ? "disabled" : ""
                        }`}
                    >
                        {videoPlaecholder ? (
                            <div
                                className={`course-page-lessons-video-plaecholder ${
                                    videoPlaecholderAnimateClose ? "close" : ""
                                }`}
                            >
                                <p className="course-page-lessons-video-plaecholder__description">
                                    Чтобы продолжить просмотр других уроков,
                                    оформите подписку
                                </p>
                                <Link
                                    to="/go/register"
                                    className="course-page-lessons-video-plaecholder__link"
                                >
                                    Открыть все уроки за 1 ₽
                                </Link>
                            </div>
                        ) : null}

                        <CoursePageLessonsVideo
                            courseId={_id}
                            image={lessons[0].image}
                            videoPlaecholder={videoPlaecholder}
                        />
                    </div>
                    <div className="course-page-lessons-list">
                        <h2 className="course-page-lessons-list__title">
                            Уроки в этом курсе
                        </h2>

                        {lessons.map((lesson, index) => (
                            <CoursePageLessonsItem
                                key={`course-page-lessons-list-item-${index}`}
                                num={index + 1}
                                hours={checkDeclension(
                                    parseFloat(
                                        lesson.video.duration.split(":")[0]
                                    ),
                                    ["час", "часа", "часов"]
                                )}
                                openVideoPlaecholder={openVideoPlaecholder}
                                closeVideoPlaecholder={closeVideoPlaecholder}
                                onClickAddCourse={onClickAddCourse}
                                minutes={checkDeclension(
                                    parseFloat(
                                        lesson.video.duration.split(":")[1]
                                    ),
                                    ["минута", "минуты", "минут"]
                                )}
                                courseId={_id}
                                isLogin={isLogin}
                                isAdd={isAdd}
                                {...lesson}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageLessons;
