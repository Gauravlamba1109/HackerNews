import React from 'react'
import { Link } from 'react-router-dom'
// import getTimeDiffAndPrettyText from '../../Utilities.js'

const Story = ({ story }) => {
    return (
        <>
            <Link style={{ textDecoration: "none" }} className='storylink' to={`story/${story.objectID}` }>
                <div className='bg-purple-100 border-t px-5  sm:grid sm:grid-cols-8 sm:gap-1 sm:px-6  hover:bg-indigo-100'>
                    <dt className='storytitle text-base mt-1  text-purple-800 sm:col-span-4'>
                        <a style={{ textDecoration: "none" }} href={story.url} className="font-medium text-base text-gray-900"><div>{story.title}</div></a>
                    </dt>
                    <dd className='mt-1 text-sm text-purple-800 sm:col-span-1 sm:mt-0 flex'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            version="1.1"
                            className='w-4 h-4 mr-2 mt-0.5'>
                            <g id="icomoon-ignore">
                            </g>
                            <path d="M27.275 15.638c0-1.288-1.020-2.282-2.374-2.282h-8.536c0.545-1.265 
                            1.524-3.919 1.524-6.659 0-3.128-1.569-3.784-2.886-3.784-0.816 
                            0-1.996 0.619-1.996 1.737 0 0.472-0.075 4.671-2.639 6.822-2.732 
                            2.292-3.509 2.891-5.005 2.891-1.746 0-4.847 0.038-4.847 
                            0.038l-0.517 0.007v12.206h5.712c0.371 0 1.483 0.496 2.466 
                            0.932 1.622 0.722 3.459 1.541 4.696 1.541l8.25-0.003c1.343 0 
                            2.436-1.056 2.436-2.354 0-0.529-0.189-1.012-0.494-1.405 0.984-0.282 
                            1.711-1.18 1.711-2.254 0-0.539-0.19-1.031-0.496-1.429 0.968-0.309 
                            1.677-1.207 1.677-2.277 0-0.538-0.184-1.031-0.485-1.431 1.031-0.258 
                            1.801-1.185 1.801-2.295zM24.901 16.962h-1.822v1.049h0.477c0.746 0 1.353 
                            0.607 1.353 1.353s-0.608 1.353-1.353 1.353h-1.526v1.049h0.394c0.719 0 
                            1.304 0.585 1.304 1.305s-0.585 1.305-1.304 1.305h-1.443v1.049h0.143c0.764 0 1.387 0.586 1.387 
                            1.305 0 0.72-0.623 1.305-1.387 1.305h-1.34v0.003h-6.91c-1.014 
                            0-2.819-0.804-4.27-1.45-1.425-0.634-2.326-1.023-2.892-1.023h-4.663v-10.121c0.955-0.011 3.013-0.032 
                            4.315-0.032 1.94 0 2.959-0.854 5.679-3.136 2.868-2.406 3.014-6.774 3.014-7.626 0-0.428 
                            0.657-0.688 0.947-0.688 0.549 0 1.837 0 1.837 2.735 0 3.456-1.745 6.91-1.762 6.945l-0.39 
                            0.763h6.426c0.018 0.013 0.030 0 0.030 0h3.757c0.767 0 1.325 0.532 1.325 1.233-0 
                            0.73-0.594 1.324-1.325 1.324z"
                                fill="#000000" stroke="#292929" stroke-width="1.5">
                            </path>
                        </svg>
                        <span className='text-sm text-grey-500'>
                            {story.points}{' '}{story.points === 1 ? <span>point</span> : <span>points</span>}
                        </span>
                    </dd>

                    <dd className='mt-1 text-sm text-purple-800 sm:col-span-1 sm:mt-0 flex'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            strokeWidth={1.5}
                            className='w-4 h-4 text-gray-900 mr-2 mt-0.5'
                        >
                            <path d="M12 21C16.9706 21 21 16.9705 21 12C21 7.02941 16.9706 2.99997 12 2.99997C7.02944 2.99997 3 7.02941 3 12C3 13.4876 
                        3.36093 14.8909 4 16.1272L3 21L7.8728 20C9.10904 20.639 10.5124 21 12 21Z" stroke="#292929" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <rect x="7.5" y="12" width="0.01" height="0.01" stroke="#292929" stroke-width="3" stroke-linejoin="round" />
                            <rect x="12" y="12" width="0.01" height="0.01" stroke="#292929" stroke-width="3" stroke-linejoin="round" />
                            <rect x="16.5" y="12" width="0.01" height="0.01" stroke="#292929" stroke-width="3" stroke-linejoin="round" />
                        </svg>
                        <span>
                            {story.num_comments}{' '}{story.num_comments === 1 ? <span>comment</span> : <span>comments</span>}
                        </span>
                    </dd>

                    <dd className='mt-1 text-sm text-purple-800 sm:col-span-1 sm:mt-0 flex'>
                        <svg
                            className='w-4 h-4 text-gray-900 mr-2 mt-0.5'
                            viewBox="-1.9 -1.9 22.80 22.80"
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
                        <span>
                            {story.created_at}{' '}
                        </span>
                    </dd>

                    <dd className='mt-1 text-sm text-purple-800 sm:col-span-1 sm:mt-0 flex'>
                        <svg viewBox="0 0 24.00 24.00"
                            fill="none"
                            strokeWidth={1.5}
                            xmlns="http://www.w3.org/2000/svg"
                            className='w-5 h-5 mr-2 mt-0.5'
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
                        <span>
                            {story.author}
                        </span>

                    </dd>

                </div>

            </Link>
        </>
    )
}

export default Story