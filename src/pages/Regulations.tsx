import React from "react";
import {Helmet} from "react-helmet";

import {PolicyBlock} from "../components/";

const Regulations: React.FC = () => {
    const documentContent = [
        {
            title: "",
            content: [
                {
                    type: "text",
                    text: "1. Конечный пользователь имеет право пользоваться Платформой в рамках предоставленного функционала и интерактивного взаимодействия с доступной информацией на все время доступа к Платформе.",
                },
            ],
        },
        {
            title: "",
            content: [
                {
                    type: "text",
                    text: "2. Конечный пользователь обязан:",
                },
                {
                    type: "text",
                    text: "2.1. Воздерживаться от любых действий, которые нарушают права ХобДжоб на результаты интеллектуальной деятельности, в частности, не копировать, не записывать, не воспроизводить, не распространять любые результаты интеллектуальной деятельности ХобДжоб без его письменного разрешения;",
                },
                {
                    type: "text",
                    text: "2.2. немедленно сообщать ХобДжоб о любых ставших известными фактах нарушения его исключительных прав;",
                },
                {
                    type: "text",
                    text: "2.3. не предоставлять свои аутентификационные данные для доступа в Личный кабинет на Платформе третьим лицам. В случае утраты, а также в случаях незаконного получения доступа к логину и паролю третьими лицами, Конечный пользователь обязуется незамедлительно сообщить об этом ХобДжоб, путем направления уведомления по адресу: hello@hobjob.ru До момента отправки указанного извещения все действия, совершенные с использованием Личного кабинета Конечного пользователя, считаются совершенными Конечным пользователем.",
                },
                {
                    type: "text",
                    text: "2.4. Соблюдать этические нормы поведения при прохождении Курса, в частности не публиковать в общих чатах сообщения, не относящиеся к тематике освоения Курса, не допускать неуважительных высказываний и оскорблений в адрес других Конечных пользователей, сотрудников ХобДжоб, ХобДжоб",
                },
            ],
        },
        {
            title: "",
            content: [
                {
                    type: "text",
                    text: "3. Конечный пользователь дает свое согласие ХобДжоб на обработку своих персональных данных, указанных им при регистрации на Сайте, а также в Личном кабинете на условиях, предусмотренных Политикой обработки персональных данных, размещенной по адресу: https://hobjob.ru/policy",
                },
            ],
        },
        {
            title: "",
            content: [
                {
                    type: "text",
                    text: "4. Конечный пользователь дает согласие на получение от ХобДжоб смс-рассылок, а также иных видов рассылок и уведомлений, информационного характера (устных и письменных), с использованием любых средств связи, включая но не ограничиваясь следующими: электронная почта, телефон, почтовые рассылки. Настоящее согласие действует с даты регистрации Конечного пользователя на Сайте. Настоящее согласие может быть в любое время отозвано Конечным пользователем посредством направления уведомления по электронной почте ХобДжоб hello@hobjob.ru С учетом того, что данное согласие необходимо для корректного функционирования Платформы, в случае отзыва согласия по настоящему пункту Исполнитель вправе ограничить доступ к Платформе",
                },
            ],
        },
        {
            title: "",
            content: [
                {
                    type: "text",
                    text: "5. Конечный пользователь дает согласие на получение от ХобДжоб смс-рассылок, а также иных видов рассылок и уведомлений, рекламного характера (устных и письменных), с использованием любых средств связи, включая но не ограничиваясь следующими: электронная почта, телефон, почтовые рассылки. Настоящее согласие действует с даты регистрации Конечного пользователя на Сайте. Настоящее согласие может быть в любое время отозвано Конечным пользователем посредством направления уведомления по электронной почте ХобДжоб hello@hobjob.ru",
                },
            ],
        },
        {
            title: "",
            content: [
                {
                    type: "text",
                    text: "6. Конечный пользователь дает согласие на использование ХобДжоб отзывов Конечного пользователя об Исполнителе и оказываемых им услугах, оставленных Конечным пользователем в официальных группах ХобДжоб в социальных сетях, в целях размещения таких отзывов на официальных сайтах ХобДжоб, в информационных и рекламных материалах ХобДжоб. Настоящее согласие может быть отозвано Конечным пользователем в любой момент путем направления письменного заявления по юридическому адресу Исполнителя: Ростовская область, г. Волгодонск, Морская 122",
                },
            ],
        },
        {
            title: "",
            content: [
                {
                    type: "text",
                    text: "7. Конечный пользователь дает свое согласие ХобДжоб на обнародование и дальнейшее использование изображения Конечного пользователя в фото-, видеоматериалах, равно как и зафиксированного в независимых друг от друга кадрах таких видеоматериалов, а также зафиксированного в любых иных объектах изображении в целях размещения такого изображения на официальных сайтах ХобДжоб, в информационных и рекламных материалах ХобДжоб и любых иных целях, связанных с деятельностью ХобДжоб и не противоречащих действующему законодательству. Настоящее согласие действует с даты регистрации Конечного пользователя на Сайте и распространяется на любые объекты, созданные ХобДжоб в период доступа к Платформе Конечным пользователем, а также полученные от Конечного пользователя в этот период. Настоящее согласие может быть отозвано Конечным пользователем в любой момент путем направления письменного заявления по юридическому адресу Исполнителя: Ростовская область, г. Волгодонск, Морская 122",
                },
            ],
        },
        {
            title: "",
            content: [
                {
                    type: "text",
                    text: "8. Конечный пользователь вправе размещать на Платформе Контент, если такое возможно, исходя из функциональности Платформы. При этом при размещении Контента Конечный пользователь предоставляет согласие ХобДжоб на право использования Контента на территории всех стран мира на срок действия исключительного права следующими способами: -воспроизводить (копировать) Контент; -распространять Контент; -осуществлять публичный показ Контента и его отдельных частей без соблюдения их последовательности; -переводить или иным образом перерабатывать Контент; -доводить Контент до всеобщего сведения таким образом, что любое лицо может получить доступ к произведению из любого места и в любое время по собственному выбору (доведение до всеобщего сведения).",
                },
            ],
        },
        {
            title: "",
            content: [
                {
                    type: "text",
                    text: "9. Конечный пользователь дает свое согласие на получение рекламно-информационного материала от партнеров ХобДжоб в целях возможного получения различных поощрений (бонусы, скидки) от них. Условия получения и размер поощрения определяется партнерами ХобДжоб самостоятельно. В случае изменения условий поощрения от партнеров ХобДжоб вправе изменять, добавлять и убирать бонусы от партнеров, направляя письменное уведомление Конечному пользователю на электронную почту, указанному в Личном кабинете. В случае таких изменений Конечный пользователь не вправе требовать от ХобДжоб оставлять прежние условия поощрений от партнеров и не праве требовать какие-либо выплаты и убытки, связанные с такими изменениями. Конечный пользователь настоящим понимает и принимает, что ХобДжоб самостоятельно не вносит какие-либо изменения от партнеров и не несет ответственности и не контролирует такие изменения. Настоящее согласие может быть отозвано Конечным пользователем в любой момент путем направления письменного заявления по юридическому адресу Исполнителя: Ростовская область, г. Волгодонск, Морская 122",
                },
            ],
        },
    ];

    return (
        <>
            <Helmet>
                <title>Правила пользования Платформой - HobJob</title>
            </Helmet>
            <section className="policy">
                <div className="container">
                    <div className="policy-wrapper">
                        <h2 className="title__mb policy__title">
                            Правила пользования Платформой
                        </h2>
                        <div className="policy-block-wrapper">
                            {documentContent.map((item, index) => (
                                <PolicyBlock
                                    {...item}
                                    blockIndex={index}
                                    key={`policy-block-${index}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Regulations;
