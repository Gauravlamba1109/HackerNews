import React from "react";

const Comment = ({ props }) => {
    return (
        <div>
            <div className="comment border-b border-gray-300 overflow-auto ">
                    <div className="bg-purple-100 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-6 hover:bg-indigo-100">
                        <dd className="mt-1 text-sm text-purple-800 sm:col-span-3 sm:mt-0">
                            <div className="mb-2 flex">
                                <div className="author flex mr-4">
                                    <svg viewBox="0 0 24.00 24.00"
                                        fill="none"
                                        strokeWidth={1.5}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className='w-5 h-5  mt-0.5'
                                    >
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M16 8C16 10.2091 14.2091 12 12 
                                                12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 
                                                4 12 4C14.2091 4 16 5.79086 16 8Z"
                                                stroke="#464455" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                            <path d="M14.6824 14H9.31765C8.83513 14 8.59387 
                                                14 8.37806 14.0461C7.63116 14.2056 6.9853 
                                                14.7661 6.62346 15.569C6.51891 15.8009 6.44262 
                                                16.0765 6.29003 16.6278C6.10668 17.2901 6.01501 
                                                17.6213 6.00261 17.8884C5.95888 18.8308 6.46818 
                                                19.6817 7.22441 19.9297C7.43875 20 7.72864 20
                                                8.30844 20H15.6916C16.2714 20 16.5613 20 16.7756
                                                19.9297C17.5318 19.6817 18.0411 18.8308 17.9974
                                                17.8884C17.985 17.6213 17.8933 17.2901 17.71 
                                                16.6278C17.5574 16.0765 17.4811 15.8009 17.3765
                                                    15.569C17.0147 14.7661 16.3688 14.2056 15.6219
                                                    14.0461C15.4061 14 15.1649 14 14.6824 14Z"
                                                stroke="#464455" stroke-linecap="round"
                                                stroke-linejoin="round"></path> </g></svg>

                                    <span>{props.author}</span>
                                </div>

                                <div className="time flex mr-4">
                                    <svg
                                        className='w-4 h-4 text-gray-900 mt-1'
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#000000" stroke="#000000"
                                        stroke-width="0.00019"
                                        transform="rotate(0)">
                                        <g id="SVGRepo_tracerCarrier"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke="#CCCCCC"
                                            stroke-width="0.22799999999999998">
                                        </g>
                                        <path fill="#000000"
                                            fill-rule="evenodd"
                                            d="M161.960546,159.843246 
                                                L164.399107,161.251151 C164.637153,161.388586 
                                                164.71416,161.70086 164.580127,161.933013 
                                                C164.442056,162.172159 164.144067,162.258604 
                                                163.899107,162.117176 L161.419233,160.68542 
                                                C161.165323,160.8826 160.846372,161 160.5,161 
                                                C159.671573,161 159,160.328427 159,159.5 
                                                C159,158.846891 159.417404,158.291271 
                                                160,158.085353 L160,153.503423 C160,153.22539 
                                                160.231934,153 160.5,153 C160.776142,153 161,153.232903 
                                                161,153.503423 L161,158.085353 C161.582596,158.291271 
                                                162,158.846891 162,159.5 C162,159.6181 161.986351,159.733013 
                                                161.960546,159.843246 Z M160.5,169 C165.746705,169 
                                                170,164.746705 170,159.5 C170,154.253295 165.746705,150 
                                                160.5,150 C155.253295,150 151,154.253295 151,159.5 
                                                C151,164.746705 155.253295,169 160.5,169 Z M160.5,168 
                                                C165.19442,168 169,164.19442 169,159.5 C169,154.80558 
                                                165.19442,151 160.5,151 C155.80558,151 152,154.80558 
                                                152,159.5 C152,164.19442 155.80558,168 160.5,168 Z"
                                            transform="translate(-151 -150)">
                                        </path>
                                    </svg>
                                    <span>{props.created_at}</span>
                                </div>

                                <div className="story flex mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="black" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" 
                                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621
                                         0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 
                                         0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 
                                         3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                    </svg>

                                    <a href={props.story_url} style={{ textDecoration: "none" }}>{props.story_title}</a>
                                </div>

                            </div>

                            <div className="commentText text-base text-gray-900">
                                <span dangerouslySetInnerHTML={{ __html: props.comment_text }}></span>
                            </div>


                        </dd>
                    </div>
                

            </div>
        </div>
    )
}

export default Comment