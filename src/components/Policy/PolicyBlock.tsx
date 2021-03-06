import React from "react";

interface PolicyBlockProps {
    title: string;
    content: {
        type: string;

        text?: string;
        items?: string[];
    }[];

    blockIndex: number;
}

const PolicyBlock: React.FC<PolicyBlockProps> = ({
    title,
    content,
    blockIndex,
}) => {
    return (
        <div className="policy-block">
            <h3 className="policy-block__title">{title}</h3>
            {content.map((item, index) =>
                item.type === "list" ? (
                    <ul
                        className="policy-block-list"
                        key={`policy-block-${blockIndex}-list-${index}`}
                    >
                        {item.items &&
                            item.items.map((text, indexListItem) => (
                                <li
                                    className="policy-block-list__item"
                                    key={`policy-block-${blockIndex}-list-${index}__item-${indexListItem}`}
                                >
                                    {text}
                                </li>
                            ))}
                    </ul>
                ) : (
                    <p
                        className="policy-block__description"
                        key={`policy-block-${blockIndex}__description-${index}`}
                        dangerouslySetInnerHTML={{
                            __html: item.text ? item.text : "",
                        }}
                    ></p>
                )
            )}
        </div>
    );
};

export default PolicyBlock;
