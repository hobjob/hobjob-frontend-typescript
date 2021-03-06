import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";
import {useParams, Link, Navigate} from "react-router-dom";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {fetchMasterById} from "../redux/actions/masters";
import {addUserCourse, hiddenUserCourse} from "../redux/actions/user";

import {
    MasterCardInfo,
    ShopBlock,
    Loader,
    MagazineBlockBig,
    MagazineBlock,
} from "../components/";

const MasterCard: React.FC = ({}) => {
    const dispatch = useDispatch();
    const {id} = useParams();

    const {itemById, items, isLoaded, isLoadedById} = useTypedSelector(
        ({masters}) => masters
    );
    const categories = useTypedSelector(({categories}) => categories.items);
    const isLoadedAllCategories = useTypedSelector(
        ({categories}) => categories.isLoadedAllCategories
    );
    const {userInfo, isLoadedUserInfo} = useTypedSelector(({user}) => user);

    React.useEffect(() => {
        dispatch(fetchMasterById(id ? id : ""));
    }, []);

    const onClickAddCourse = (id: string) => {
        dispatch(addUserCourse(id));
    };

    const onClickHiddenCourse = (id: string) => {
        dispatch(hiddenUserCourse(id));
    };

    return (
        <>
            {isLoadedById && isLoadedAllCategories && isLoaded ? (
                itemById._id !== "" ? (
                    <>
                        <Helmet>
                            <title>
                                {itemById.name} {itemById.surname} - HobJob
                            </title>
                        </Helmet>
                        <section className="master-card">
                            <div className="container">
                                <div className="master-card-wrapper">
                                    <MasterCardInfo {...itemById} />

                                    {itemById.courses &&
                                    itemById.courses.length ? (
                                        <div className="master-card-courses">
                                            <h2 className="title__mb master-card-course__title">
                                                ??????????
                                            </h2>
                                            <div className="master-card-courses-block-wrapper">
                                                {itemById.courses.map(
                                                    (item, index) => (
                                                        <ShopBlock
                                                            {...item}
                                                            key={`shop-master-card-block-${index}`}
                                                            master={itemById}
                                                            categoryItem={
                                                                categories[
                                                                    item
                                                                        .category
                                                                ]
                                                            }
                                                            onClickAddCourse={
                                                                onClickAddCourse
                                                            }
                                                            onClickHiddenCourse={
                                                                onClickHiddenCourse
                                                            }
                                                            isAdd={
                                                                userInfo.courses &&
                                                                userInfo
                                                                    .courses[
                                                                    item._id
                                                                ]
                                                                    ? true
                                                                    : false
                                                            }
                                                            isLogin={
                                                                localStorage.getItem(
                                                                    "accessToken"
                                                                ) &&
                                                                isLoadedUserInfo
                                                                    ? true
                                                                    : false
                                                            }
                                                        />
                                                    )
                                                )}
                                            </div>
                                            <div className="master-card-courses-btn">
                                                <a
                                                    href={`/course?masters=${itemById._id}`}
                                                    className="btn__gray master-card-courses__btn"
                                                >
                                                    ???????????????? ??????
                                                </a>
                                            </div>
                                        </div>
                                    ) : null}

                                    {itemById.posts && itemById.posts.length ? (
                                        <div className="master-card-magazine">
                                            <h2 className="title__mb master-card-magazine__title">
                                                ?????????????????? ?????????? ??????????????
                                            </h2>

                                            <div className="master-card-magazine-block-wrapper">
                                                <>
                                                    {window.innerWidth > 900 ? (
                                                        <MagazineBlockBig
                                                            {...itemById
                                                                .posts[0]}
                                                            master={
                                                                items[
                                                                    itemById._id
                                                                ]
                                                            }
                                                            category={
                                                                categories[
                                                                    itemById
                                                                        .posts[0]
                                                                        .category
                                                                ]
                                                            }
                                                        />
                                                    ) : null}

                                                    <div className="magazine-block-wrapper">
                                                        {itemById.posts.map(
                                                            (item, index) =>
                                                                window.innerWidth >
                                                                900 ? (
                                                                    index !==
                                                                    0 ? (
                                                                        <MagazineBlock
                                                                            {...item}
                                                                            master={
                                                                                items[
                                                                                    itemById
                                                                                        ._id
                                                                                ]
                                                                            }
                                                                            category={
                                                                                categories[
                                                                                    item
                                                                                        .category
                                                                                ]
                                                                            }
                                                                            key={`master-card-magazine-block-${index}`}
                                                                        />
                                                                    ) : null
                                                                ) : (
                                                                    <MagazineBlock
                                                                        {...item}
                                                                        master={
                                                                            items[
                                                                                itemById
                                                                                    ._id
                                                                            ]
                                                                        }
                                                                        category={
                                                                            categories[
                                                                                item
                                                                                    .category
                                                                            ]
                                                                        }
                                                                        key={`master-card-magazine-block-${index}`}
                                                                    />
                                                                )
                                                        )}
                                                    </div>
                                                </>
                                            </div>

                                            <div className="master-card-magazine-btn">
                                                <Link
                                                    to="/magazine"
                                                    className="btn__gray master-card-magazine__btn"
                                                >
                                                    ???????????????? ??????
                                                </Link>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </section>
                    </>
                ) : (
                    <Navigate to="/" />
                )
            ) : (
                <Loader />
            )}
        </>
    );
};

export default MasterCard;
