import {Link} from 'react-router-dom'

import Stars from './Stars'

export default function Footer() {
    return(
        <footer>
            <div className="footer-container w-[92%] mx-auto my-0 bg-[#322F30] rounded-md">
                <div className="footer-logo py-5 mx-auto my-0 w-[90%] flex flex-col text-center gap-1">
                    <div>
                        <svg className='max-w-[300px] mx-auto my-0' 
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153 73" fill="none">
    <path d="M56.0974 50.275C55.8426 48.3341 55.0783 46.6477 53.6202 45.3218C51.7056 43.5775 49.3873 43.0305 46.8722 43.1364C46.7083 43.144 46.4585 43.4238 46.4131 43.6153C45.959 45.463 45.5403 47.3157 45.1114 49.1659C45.0257 49.5364 45.0862 49.7532 45.5277 49.8692C49.0846 50.8144 52.3286 52.3722 55.0985 54.8324C55.4466 55.1399 55.5778 55.0618 55.709 54.6257C56.1454 53.199 56.2488 51.7471 56.0974 50.275ZM39.8644 51.8781C39.5011 51.8176 39.2514 51.7294 39.0117 51.7471C37.2737 51.8681 35.523 51.9084 33.8101 52.1781C32.2234 52.4277 30.7552 53.1007 29.5393 54.2098C28.5858 55.0794 27.9223 56.1179 27.8265 57.4438C27.6902 59.2436 28.5076 60.6451 29.7638 61.8122C31.9408 63.8313 34.64 64.6202 37.5158 64.8547C39.8064 65.0412 42.0792 64.8597 44.3244 64.2875C47.7501 63.4153 50.7369 61.8298 53.146 59.2108C53.489 58.8403 53.5017 58.6008 53.1737 58.2177C50.8706 55.5357 47.9771 53.7888 44.6321 52.7301C44.2235 52.6016 44.11 52.7226 43.9636 53.0755C43.4743 54.2425 43.0177 55.4348 42.4122 56.5414C40.6893 59.6872 37.7076 61.0308 34.3651 60.2241C34.1381 60.1687 33.9665 59.8939 33.7723 59.7175C33.9766 59.5209 34.1582 59.1907 34.3903 59.1478C35.5028 58.9436 36.3504 58.3311 36.9583 57.4514C37.6672 56.4255 38.2878 55.3365 38.8755 54.2375C39.259 53.5141 39.5163 52.7201 39.8619 51.8832M47.2077 40.6812C48.1209 40.3687 48.9332 40.167 49.6748 39.8192C53.093 38.2261 55.6055 35.7432 56.9299 32.1739C57.4672 30.7296 57.7195 29.2348 57.2654 27.6972C56.8012 26.1293 55.7392 25.1916 54.1676 24.9118C52.1949 24.5614 50.3206 24.8664 48.7163 26.1545C47.8964 26.8124 47.3692 27.6342 47.6643 28.7634C47.7728 29.1894 47.4423 29.255 47.1699 29.3255C46.0271 29.623 44.8768 28.8617 44.6296 27.6871C44.2209 25.7361 45.0181 24.1909 46.4156 22.991C49.4251 20.4073 52.8988 19.7999 56.5868 21.2089C59.344 22.26 60.7517 24.4959 61.1174 27.3745C61.5866 31.0925 60.232 34.2106 57.8103 36.9305C56.4077 38.5084 54.7125 39.7108 52.8054 40.6157C52.6339 40.6964 52.4825 40.8148 52.2504 40.961C53.1157 41.203 53.8927 41.3694 54.6267 41.6391C58.1433 42.9171 60.0958 45.4327 60.4969 49.1508C60.8198 52.1756 60.0453 54.9433 58.4939 57.5119C58.1584 58.0664 58.1584 58.4597 58.4813 59.0218C59.7628 61.2501 60.5145 63.6548 60.3253 66.2461C60.1563 68.5727 59.3264 70.6043 57.1241 71.7739C56.3169 72.2025 55.439 72.4218 54.493 72.2579C53.3503 72.0613 52.4876 71.1261 52.4926 69.9666C52.4926 69.8179 52.707 69.5381 52.8105 69.5431C54.3846 69.6213 55.0934 68.6306 55.5425 67.3476C56.1555 65.6058 55.9032 63.8766 55.381 62.1626C55.3381 62.0164 55.2297 61.8903 55.1313 61.7214C54.3669 62.3264 53.6606 62.9162 52.9265 63.4683C50.6965 65.1294 48.2395 66.3393 45.5907 67.1939C42.6721 68.1341 39.6853 68.6105 36.6279 68.4542C32.5715 68.2551 28.891 67.0552 25.9723 64.0657C24.8498 62.9162 24.0198 61.5803 23.6515 60.0074C23.0915 57.6077 23.8432 55.5231 25.3644 53.688C26.8679 51.8731 28.8431 50.769 31.0579 50.0406C34.0775 49.0474 37.1778 48.8659 40.321 49.055C40.6641 49.0751 40.7978 48.9516 40.8886 48.634C41.6353 45.9823 42.3618 43.328 43.169 40.6964C43.5928 39.3125 44.1629 37.9765 44.67 36.6204C44.728 36.4616 44.786 36.3028 44.8894 36.028C44.5237 36.1112 44.279 36.1541 44.0418 36.2196C42.2937 36.7112 40.5228 37.0036 38.7216 36.5801C36.4639 36.0507 34.8217 34.7954 34.1179 32.4991C33.5099 30.5178 34.8671 28.4156 36.865 28.2744C37.0996 28.2568 37.3493 28.4282 37.5915 28.5164C37.5158 28.6979 37.4654 28.8945 37.362 29.0609C36.9861 29.6658 37.1501 30.2733 37.4124 30.8304C38.0002 32.068 39.0975 32.6932 40.3563 33.0562C41.8522 33.4872 43.3355 33.3057 44.8087 32.8848C47.2985 32.1739 49.3898 30.7422 51.4684 29.2701C51.6879 29.1163 51.9326 28.9323 52.1798 28.9046C52.4119 28.8769 52.7524 28.9726 52.8887 29.144C52.9921 29.2701 52.8887 29.6104 52.8079 29.8297C52.7474 29.9885 52.5935 30.1271 52.4523 30.233C50.6662 31.5639 49.5916 33.4065 48.8172 35.4281C48.237 36.9506 47.7879 38.521 47.2859 40.0712C47.2456 40.2023 47.2506 40.351 47.2077 40.6863" fill="white"></path>
    <path d="M25.9597 25.8192C25.4854 25.1538 24.658 24.8815 23.9592 25.1588C23.881 25.189 23.8331 25.3025 23.8331 25.3857C23.8331 25.4209 23.8331 25.4688 23.8533 25.5243C24.04 26.1167 23.9264 26.4292 23.4068 26.7544C23.041 26.9813 22.6172 27.1703 22.1732 27.3014C21.752 27.4274 21.3105 27.5182 20.8262 27.5862C19.8221 27.7274 18.8055 27.7324 17.6754 27.7249C16.9388 27.7223 16.2047 27.7047 15.4681 27.6845C14.449 27.6618 13.397 27.6392 12.3602 27.6492C10.0041 27.6719 7.88512 28.2391 6.06379 29.3331C4.11886 30.5001 3.00134 31.9495 2.64565 33.7569C2.38834 35.0802 2.63556 36.1314 3.40748 36.9733C3.90948 37.5228 4.75203 37.8076 5.5517 37.6942C5.94523 37.6387 6.30596 37.4925 6.59354 37.2682C6.80544 37.0993 6.9341 36.8498 7.04257 36.6279C7.0678 36.5775 7.09302 36.5246 7.11825 36.4792C7.16113 36.3986 7.15104 36.3078 7.08545 36.207C7.05014 36.149 6.92148 35.965 6.74995 35.9726C6.48759 35.9852 6.3211 35.8793 6.14956 35.5844C5.8973 35.1508 5.80901 34.6391 5.87712 33.9762C5.99821 32.7914 6.70454 31.8613 8.03648 31.1328C8.93453 30.6438 9.94862 30.3262 11.1292 30.1573C11.606 30.0918 12.1105 30.0489 12.6655 30.0262C12.8875 30.0187 13.1069 30.0187 13.3466 30.0187H13.397C13.3743 30.0615 13.3516 30.1069 13.3315 30.1472C13.1952 30.4094 13.0741 30.6463 12.9657 30.8883C12.2543 32.4915 11.8078 34.1854 11.3764 35.8238L10.993 37.2707C10.4254 39.4183 9.83511 41.6416 8.97742 43.7489C8.38712 45.2033 7.66061 46.7157 6.36903 47.9357C5.34485 48.9012 4.24499 49.3499 2.99881 49.307C2.15878 49.2768 1.68201 48.9188 1.5029 48.1803C1.4247 47.8626 1.20019 47.7795 1.01351 47.8072C0.935312 47.8198 0.852065 47.8475 0.766296 47.8979C0.584668 48.0038 0.420698 48.1752 0.322316 48.3542C-0.0863483 49.128 -0.109052 50.1161 0.269341 50.9354C0.637643 51.7395 1.36668 52.3016 2.31518 52.5158C2.99629 52.6696 3.70767 52.6973 4.43166 52.5965C5.18592 52.4881 5.97046 52.2461 6.82562 51.8479C8.49055 51.074 9.74934 49.7885 10.7887 47.7996C11.9264 45.6293 12.4687 43.3128 12.9278 41.1299C13.1624 40.0132 13.387 38.8915 13.6089 37.7723C13.8738 36.4464 14.1488 35.0777 14.4338 33.7317C14.7012 32.489 15.1099 31.3219 15.6573 30.2657C15.7204 30.1447 15.7406 30.1447 15.7683 30.1397C15.7885 30.1397 15.8137 30.1397 15.8465 30.1422C16.4948 30.2355 17.3525 30.3489 18.2203 30.4422C20.0038 30.6262 21.5274 30.5959 22.9855 30.3338C23.7373 30.1977 24.4108 29.9456 24.991 29.5826C25.7301 29.1213 26.217 28.4483 26.3683 27.6921C26.4995 27.0342 26.3532 26.3662 25.9546 25.8117" fill="white"></path>
    <path d="M27.0293 41.5332C27.0621 41.5483 27.0949 41.5634 27.1277 41.5785C28.1216 41.0114 29.0424 40.3762 29.5141 39.3175C29.557 39.2192 29.5797 39.1108 29.5948 39.0049C29.6529 38.6344 29.4435 38.4554 29.0701 38.5915C28.8153 38.6848 28.5656 38.826 28.3587 38.9923C27.7987 39.4536 27.4935 40.0661 27.2639 40.7114C27.1681 40.9811 27.1025 41.2609 27.0243 41.5357M18.1598 39.3225C18.2683 39.2293 18.3768 39.136 18.4852 39.0402C18.9368 38.6293 19.469 38.3697 20.0947 38.3269C21.2525 38.2538 22.1531 39.0301 22.1531 40.1997C22.1556 40.9685 21.9992 41.7424 21.8832 42.5087C21.7798 43.1817 21.6259 43.8522 21.5149 44.5227C21.4846 44.7017 21.5023 44.8907 21.525 45.0722C21.5931 45.5839 21.9891 45.7831 22.4281 45.4554C22.8468 45.1428 23.2227 44.7496 23.5204 44.3311C24.151 43.4439 24.4891 42.4406 24.7741 41.4172C25.1727 39.9804 25.8639 38.6898 27.1479 37.7345C27.8366 37.2228 28.6236 36.948 29.499 36.9203C30.8688 36.8749 31.6533 37.8303 31.3026 39.1108C31.0857 39.9073 30.566 40.5325 29.9379 41.0895C29.1761 41.7651 28.2906 42.2667 27.3472 42.6826C26.8452 42.9044 26.8048 42.9145 26.8956 43.4136C26.9738 43.8421 27.0873 44.2833 27.2866 44.6689C27.5692 45.2109 28.0813 45.3697 28.7144 45.2336C30.1448 44.9285 31.0781 44.0387 31.7769 42.9145C32.1502 42.307 32.4075 41.634 32.7153 40.9912C32.7683 40.8828 32.8086 40.7744 32.8465 40.6837C32.8919 40.6711 32.907 40.6661 32.9146 40.6661C33.6991 40.7442 33.7193 40.7669 33.4973 41.4626C33.0029 43.0053 32.3445 44.4673 31.1437 45.6772C30.2835 46.5443 29.2467 47.1241 27.9829 47.2854C26.487 47.4795 25.203 46.693 24.7817 45.3495C24.7262 45.1756 24.6581 45.0067 24.5597 44.7395C24.4436 44.9588 24.368 45.0974 24.2973 45.2336C23.8811 46.0326 23.4094 46.7913 22.6778 47.3862C22.0219 47.9206 21.2778 48.1727 20.4251 47.9509C19.8247 47.792 19.4413 47.4089 19.3026 46.8392C19.0806 45.9469 19.2344 45.0571 19.3984 44.1723C19.5851 43.1817 19.7894 42.1936 19.9786 41.2055C20.0038 41.0694 19.9988 40.9207 19.966 40.7896C19.8399 40.2476 19.3555 40.0586 18.8308 40.3333C18.3793 40.5703 18.1245 40.9559 17.9025 41.3693C17.4358 42.2264 17.2718 43.159 17.1205 44.0892C16.9742 44.989 16.8531 45.8889 16.7875 46.7913C16.7547 47.2375 16.8531 47.6887 16.9338 48.1323C16.9792 48.3769 16.9162 48.5256 16.6614 48.5609C15.8213 48.6793 14.9813 48.7902 14.1413 48.8936C13.8335 48.9314 13.7957 48.7449 13.8386 48.5205C13.9975 47.6786 14.1488 46.8367 14.3279 45.9973C15.0242 42.7406 15.728 39.4813 16.4343 36.2246C16.6336 35.302 16.8329 34.3795 17.0751 33.4644C17.1281 33.2628 17.3324 33.0385 17.5292 32.9326C18.0791 32.6528 18.682 32.5973 19.2874 32.7259C19.6885 32.8141 19.7415 32.9401 19.6431 33.3082C19.1436 35.2037 18.6492 37.0968 18.1548 38.9898C18.1321 39.0831 18.1194 39.1789 18.1043 39.2721C18.1245 39.2872 18.1421 39.3024 18.1623 39.315" fill="white"></path>
    <path d="M81.9366 41.5483C81.6717 43.5397 81.0158 45.4251 79.9639 47.1442C79.6208 47.7038 79.1642 48.2281 78.6546 48.644C77.7944 49.3473 76.8585 48.9869 76.5785 47.913C76.4726 47.5097 76.4246 47.0938 76.3338 46.6149C76.3187 43.8043 76.8989 41.0971 78.526 38.6873C78.8615 38.1933 79.3433 37.7547 79.8428 37.4219C80.8972 36.7187 81.871 37.1522 81.9921 38.4201C82.0904 39.4536 82.0753 40.5199 81.9366 41.5483ZM116.237 32.0529C116.529 31.8991 117.061 31.821 117.268 31.9823C117.47 32.1411 117.543 32.7083 117.422 32.9906C117.112 33.7266 116.739 34.4702 116.247 35.0979C115.422 36.1616 113.785 37.311 112.897 37.5429C113.495 35.3146 114.075 33.1998 116.234 32.0529M152.313 24.8235C151.346 24.5437 150.385 24.5614 149.432 24.9395C148.887 25.1563 148.566 25.4966 148.493 26.0839C148.302 27.6492 148.047 29.207 147.9 30.7749C147.686 33.041 147.149 35.2012 146.029 37.1951C145.383 38.342 144.656 39.4284 143.473 40.104C142.656 40.5678 141.907 40.3207 141.692 39.4208C141.521 38.71 141.4 37.9412 141.475 37.2228C141.844 33.7342 142.555 30.3161 143.708 26.9938C143.958 26.2754 143.834 25.973 143.1 25.7915C142.023 25.5293 140.928 25.4537 139.904 25.9629C139.571 26.1293 139.192 26.4922 139.107 26.8325C138.713 28.3928 138.39 29.9758 138.093 31.5563C137.876 32.7108 137.833 33.9056 137.555 35.0424C137.114 36.8296 136.304 38.4806 135.277 40.0082C134.952 40.4921 134.503 40.9282 134.024 41.2635C133.368 41.7222 132.694 41.3895 132.581 40.6106C132.528 40.2376 132.487 39.8418 132.555 39.4763C132.853 37.8731 133.178 36.2775 133.524 34.6845C133.88 33.041 134.162 31.4051 133.691 29.7364C133.327 28.4508 132.215 27.3115 130.88 27.198C129.841 27.1098 128.913 27.4627 127.962 27.7475C127.296 27.9492 126.66 28.0349 125.989 27.7879C125.353 27.5509 125.159 27.6896 125.01 28.3575C124.528 30.5102 124.087 32.678 123.532 34.813C123.033 36.7338 122.495 38.652 121.398 40.356C120.084 42.3978 118.492 44.064 116.002 44.6236C114.864 44.8807 113.891 44.5555 113.396 43.4892C113.038 42.7179 112.844 41.8508 112.692 41.0038C112.538 40.1317 112.642 40.0787 113.462 39.7082C115.175 38.9369 116.784 37.9941 118.156 36.696C119.478 35.4508 120.51 34.0392 120.697 32.1461C120.866 30.4598 119.849 29.0785 118.187 28.8163C116.3 28.5189 114.627 29.0759 113.139 30.2102C111.159 31.7176 109.955 33.7795 109.231 36.1036C108.533 38.342 107.745 40.5325 106.492 42.5263C105.939 43.4035 105.364 44.2681 104.476 44.8555C103.679 45.3848 102.894 45.2764 102.511 44.4269C102.085 43.4792 101.792 42.4583 101.527 41.4475C101.182 40.1292 100.42 39.1915 99.2014 38.6067C99.05 38.5336 98.9087 38.4428 98.7927 38.3798C100.112 37.79 101.424 37.2732 102.667 36.6229C103.74 36.0633 104.678 35.3046 105.079 34.077C105.367 33.1973 105.094 32.1587 104.446 31.6445C103.75 31.095 102.597 31.037 101.827 31.5437C101.487 31.7706 101.237 32.0377 101.643 32.4663C101.747 32.5747 101.744 32.8923 101.658 33.041C101.479 33.3535 101.27 33.6863 100.982 33.8829C99.9228 34.6038 98.8381 35.2844 97.7433 35.9524C97.4381 36.1364 97.0698 36.2221 96.6157 36.396C96.6586 36.0431 96.6712 35.849 96.709 35.66C96.8629 34.9139 97.0269 34.1728 97.1833 33.4266C98.0258 29.3784 98.9541 25.3554 100.236 21.4256C100.44 20.8005 100.294 20.4022 99.658 20.3518C98.7877 20.2838 97.8896 20.3342 97.0243 20.4627C96.2272 20.5787 95.7529 21.108 95.589 21.9575C95.1879 23.9993 94.7237 26.0309 94.2898 28.0677C93.6087 31.274 92.9074 34.4778 92.2566 37.6891C91.8 39.9552 91.1668 42.1508 89.9787 44.1547C89.3758 45.1731 88.7502 46.1839 87.7335 46.8518C86.669 47.5501 85.9803 47.2173 85.7936 45.9646C85.5717 44.4874 85.7054 43.0103 86.0283 41.5836C86.6337 38.9016 87.3678 36.2473 88.0665 33.5855C88.233 32.9477 88.1195 32.7108 87.4813 32.5898C86.3789 32.3806 85.3522 32.6553 84.3583 33.0939C83.6923 33.3863 83.3921 33.9308 83.3114 34.6315C83.2811 34.8912 83.1954 35.1407 83.1121 35.4911C82.9179 35.2743 82.8018 35.1432 82.6858 35.0147C82.209 34.4879 81.649 34.1274 80.92 34.0367C79.5174 33.8602 78.3141 34.3643 77.1991 35.1281C75.4333 36.333 74.2451 38.0219 73.4253 39.9552C72.7996 41.4349 72.3582 42.9901 71.7452 44.4748C71.059 46.141 70.2392 47.7416 68.8518 48.9667C68.3926 49.3725 67.8503 49.7506 67.2297 49.4734C66.6091 49.1961 66.5183 48.5331 66.5284 47.9257C66.541 47.109 66.5738 46.2897 66.6974 45.4831C67.1111 42.8162 67.5274 40.1493 68.0168 37.495C68.7912 33.2905 69.6943 29.1112 71.0061 25.0327C71.1801 24.4933 71.054 24.2337 70.5041 24.1177C69.5127 23.9035 68.5717 24.1203 67.6308 24.4505C66.8009 24.7429 66.3821 25.2722 66.2257 26.1343C65.6909 29.0911 65.088 32.0377 64.5608 34.997C64.1244 37.4572 63.7233 39.9275 63.3802 42.4003C63.0926 44.4647 62.8959 46.5393 62.6814 48.6138C62.5528 49.854 62.6436 51.079 63.0674 52.2663C63.5038 53.4888 64.4397 54.1694 65.7464 54.1896C66.9119 54.2072 67.9007 53.751 68.7735 53.0149C70.0475 51.9361 70.885 50.5396 71.6064 49.06C71.7074 48.8583 71.8083 48.6567 71.9117 48.4575C71.9596 48.4626 72.0101 48.4676 72.0605 48.4726C72.1665 48.881 72.28 49.2868 72.3809 49.6952C73.1402 52.7099 75.7789 53.5518 78.3393 52.4629C79.8731 51.8075 80.8291 50.5673 81.5405 49.1104C81.6212 48.9415 81.7095 48.7776 81.7928 48.6113C81.9517 48.8079 81.9921 48.9768 82.0274 49.1431C82.5016 51.3009 83.9698 52.2184 86.0989 51.6815C87.3779 51.3588 88.281 50.5043 89.1008 49.5339C89.2471 49.365 89.3959 49.2011 89.5423 49.0348C89.5599 49.5364 89.4565 49.9674 89.3934 50.406C89.3102 50.9858 89.5095 51.2152 90.0695 51.1521C91.4973 50.9933 92.9226 50.8118 94.3478 50.6329C94.7716 50.5799 94.9356 50.3405 94.8675 49.9094C94.7994 49.4784 94.6934 49.0348 94.7464 48.6138C95.0971 45.773 95.483 42.9372 95.8589 40.1014C95.9043 39.7586 96.1137 39.6628 96.4441 39.7082C97.1177 39.804 97.5818 40.2325 97.7105 41.0139C97.8745 42.0172 97.9703 43.0305 98.1242 44.0362C98.3058 45.1983 98.4799 46.3679 98.7422 47.5148C99.0172 48.7474 100.064 49.6347 101.169 49.801C102.577 50.0128 103.747 49.5691 104.764 48.6365C106.088 47.4266 106.966 45.9015 107.771 44.3286C107.973 43.9354 108.164 43.5397 108.422 43.028C108.611 43.6455 108.752 44.1219 108.901 44.5983C109.877 47.6937 112.266 49.0146 115.278 48.4449C116.668 48.1828 117.937 47.5828 119.044 46.6905C122.336 44.0261 123.734 40.298 124.829 36.396C125.323 34.6391 125.843 32.8872 126.362 31.1379C126.393 31.032 126.541 30.906 126.655 30.8883C127.311 30.7799 127.974 30.7068 128.633 30.6136C129.284 30.5228 129.783 30.7446 129.932 31.3899C130.083 32.0453 130.202 32.7713 130.076 33.414C129.662 35.4734 129.12 37.5026 128.648 39.5494C128.343 40.8803 128.095 42.2289 128.421 43.5875C128.701 44.7546 129.266 45.7201 130.54 46.0427C132.031 46.4233 133.3 45.9545 134.394 44.9487C135.567 43.8749 136.342 42.5213 137.025 41.1097C137.109 40.9358 137.227 40.777 137.285 40.6888C137.636 41.6391 137.855 42.6398 138.347 43.4817C139.346 45.1957 141.274 45.3621 143.208 44.5353C144.54 43.9682 145.484 42.9801 146.311 41.8861C146.405 41.7651 146.503 41.6466 146.596 41.5256C146.056 43.827 145.249 46.0427 144.001 48.0845C142.081 51.2278 139.311 53.0477 135.615 53.3098C133.844 53.4359 132.371 52.72 131.259 51.3009C130.719 50.6077 130.424 49.8237 130.265 48.9692C130.184 48.5281 129.987 48.4096 129.632 48.5281C128.789 48.8029 128.217 49.3549 127.937 50.1968C127.379 51.868 127.76 53.4258 128.64 54.855C130.04 57.1236 132.235 57.9555 134.785 57.9908C136.788 58.021 138.698 57.5522 140.555 56.806C143.155 55.76 145.136 53.9854 146.619 51.6386C147.848 49.6977 148.67 47.5929 149.245 45.4075L149.27 45.4478C149.447 44.5782 150.292 40.9181 150.509 39.678C150.897 37.2455 151.263 34.8105 151.695 32.3831C152.078 30.2254 152.542 28.0828 152.968 25.9326C153.092 25.3151 152.933 25 152.318 24.821" fill="white"></path>
    <path d="M123.88 51.195C123.88 51.195 123.739 51.4143 123.449 51.7773C123.151 52.1403 122.707 52.6646 122.069 53.257C120.808 54.4543 118.782 55.997 116.002 57.1943C114.622 57.8068 113.056 58.321 111.36 58.689C110.513 58.8806 109.632 59.0243 108.729 59.1478C107.804 59.2386 106.976 59.3469 106 59.3898C104.105 59.5007 102.158 59.4679 100.198 59.2688C98.2377 59.0848 96.318 58.7621 94.4311 58.5504C92.5442 58.3336 90.6623 58.2278 88.7905 58.2278C86.9314 58.2252 85.0545 58.2782 83.2988 58.442C82.8472 58.4849 82.3957 58.5277 81.9517 58.5706C81.5254 58.626 81.1016 58.679 80.6854 58.7344C80.2666 58.7798 79.8504 58.8453 79.4367 58.9235C79.0255 58.9966 78.6193 59.0672 78.2157 59.1352C76.6214 59.4805 75.1028 59.8108 73.733 60.2342C72.3582 60.6375 71.1095 61.061 70.0147 61.4744C68.9199 61.8928 67.9764 62.2836 67.207 62.6289C66.4427 62.9818 65.8398 63.2641 65.4412 63.4758C65.0376 63.68 64.8307 63.796 64.8307 63.796L64.5684 63.4179C64.5684 63.4179 64.7626 63.254 65.1334 62.9843C65.5068 62.7095 66.0592 62.3188 66.7933 61.8626C67.5249 61.4114 68.428 60.8694 69.5001 60.33C70.5747 59.7855 71.8032 59.1982 73.1932 58.6714C74.5705 58.1143 76.1093 57.6203 77.7591 57.1716C78.1754 57.0708 78.5966 56.9699 79.023 56.8691C79.4468 56.7607 79.8832 56.6649 80.3322 56.5868C80.7837 56.5036 81.2353 56.4179 81.6919 56.3322C82.1384 56.2717 82.5849 56.2112 83.0415 56.1532C84.9057 55.9163 86.7977 55.7726 88.7653 55.7247C90.7229 55.6793 92.7334 55.7701 94.7086 55.9944C96.6889 56.2137 98.606 56.5389 100.458 56.7557C102.304 56.9725 104.131 57.0657 105.881 57.033C106.729 57.0405 107.685 56.9599 108.507 56.9271C109.35 56.8666 110.175 56.7884 110.969 56.6624C111.767 56.5414 112.536 56.3927 113.27 56.2062C114.009 56.0373 114.715 55.8381 115.381 55.6138C116.052 55.397 116.683 55.15 117.273 54.8954C117.869 54.6509 118.421 54.3862 118.936 54.1216C119.955 53.5872 120.813 53.0528 121.494 52.5713C122.172 52.0874 122.684 51.6765 123.017 51.3765C123.35 51.0791 123.509 50.9127 123.509 50.9127L123.873 51.195H123.88Z" fill="white"></path>
    <path d="M56.9778 2.74484C56.5288 2.29112 55.6257 2.41211 55.3431 2.98935C55.1741 3.33468 55.0833 3.72539 55.3658 4.02283C55.8023 4.48412 55.6786 5.00086 55.5929 5.505C55.4289 6.42757 55.2422 7.34762 55.0127 8.25255C54.7125 9.46248 54.4047 10.3296 53.6984 10.9976C52.1369 12.3991 49.8564 11.6857 49.3368 10.9572C48.6708 9.97418 48.6355 9.17764 48.4766 8.00804C48.4362 7.7232 48.3681 7.44341 48.3328 7.16109C48.2117 6.21583 48.1234 4.72358 48.0175 3.7758C47.9771 3.40526 48.1587 3.0927 48.3782 2.81542C48.5724 2.57343 48.6481 2.31632 48.5825 2.01384C48.4514 1.40383 47.8358 1.02321 47.2405 1.18958C46.6805 1.34838 46.3752 1.99872 46.6199 2.57848C46.7107 2.79021 46.8671 2.98935 47.0362 3.14563C47.2077 3.30191 47.2783 3.46324 47.2682 3.68758C47.2279 4.73367 47.2102 6.32926 47.1194 7.37283C47.0135 8.60544 46.852 9.83806 46.3399 10.9925C45.8253 12.8679 44.6119 12.8679 44.1755 12.7873C43.1539 12.4041 42.2129 10.0826 41.8068 9.32384C41.3905 8.54495 40.2781 5.29326 39.7307 3.72287L40.8305 1.55003C40.8835 1.44669 40.8431 1.32065 40.7397 1.26772L38.26 0.0199762C38.207 -0.0052307 38.149 -0.0052307 38.096 0.0124141C38.043 0.030059 37.9976 0.0653486 37.9699 0.118283L36.7187 2.5936C36.6657 2.69695 36.706 2.82298 36.812 2.87592L38.9865 3.97494C39.4759 5.56297 40.5076 8.83987 40.6363 9.71455C40.7624 10.564 41.383 12.994 40.7876 13.9065C40.4849 14.2266 39.5062 14.9475 37.9774 13.7426C36.8826 13.12 36.0224 12.2201 35.2026 11.2925C34.5088 10.5035 33.5452 9.23058 32.8918 8.41135C32.7531 8.2349 32.7127 8.06602 32.7556 7.83916C32.801 7.60977 32.8086 7.3577 32.7556 7.13336C32.6093 6.52083 31.9761 6.18054 31.4313 6.38472C30.8536 6.6015 30.5837 7.272 30.841 7.8442C30.9671 8.12651 31.1815 8.28532 31.4792 8.36598C31.8248 8.45672 32.1552 8.60292 32.3394 8.92557C32.8187 9.75236 33.6335 11.0001 34.0977 11.8344C34.2364 12.084 34.3474 12.3512 34.4861 12.6033C35.0512 13.6393 35.4952 14.2997 35.5431 15.4869C35.5557 16.3843 34.1431 18.3076 32.0543 18.1059C31.0882 17.9849 30.3263 17.4707 29.3652 16.6742C28.6438 16.0768 27.945 15.4516 27.2689 14.8038C26.9006 14.4509 26.4945 14.1081 26.5702 13.4779C26.6181 13.0721 26.3154 12.8074 25.9748 12.631C25.4047 12.3335 24.6051 12.7721 24.5142 13.4023C24.4159 14.0955 24.9305 14.6375 25.6898 14.6349C25.8815 14.6349 26.0707 14.5744 26.2246 14.7433C26.4314 14.9626 26.6458 15.1744 26.8527 15.3962C27.4077 15.9885 27.9551 16.5859 28.5101 17.1758C29.0222 17.7203 29.5418 18.2546 30.0539 18.8016C30.5963 19.3839 31.121 19.9788 31.6633 20.556C32.4151 21.3551 33.1794 22.139 33.9413 22.9305C34.1481 23.1448 34.3827 23.3414 34.5618 23.5783C34.6047 23.6388 34.6526 23.6867 34.7006 23.7245C40.7094 18.1059 46.9226 16.0415 54.9471 16.7195C54.9673 16.4801 55.0127 16.2406 55.0455 16.0011C55.1893 14.9147 55.3381 13.8308 55.4693 12.7394C55.5651 11.9529 55.6332 11.1614 55.7266 10.3724C55.8123 9.63137 55.9133 8.88776 56.0041 8.1492C56.0974 7.34258 56.1857 6.53848 56.2816 5.73438C56.3169 5.43442 56.3623 5.13698 56.3976 4.83701C56.4228 4.61015 56.612 4.54966 56.7659 4.4337C57.3789 3.98502 57.4748 3.24394 56.9803 2.74484H56.9778Z" fill="white"></path>

                        </svg>
                    </div>
                    <p>Maison de Cookie</p>
                    <Stars />
                </div>
                <ul className="footer-links text-center flex flex-col gap-1 text-sm font-semibold mb-5">
                    <li><Link to={"/build-a-box"}>Build a Box</Link></li>
                    <li><Link to={"/gift-cards"}>Gift Cards</Link></li>
                    <li><Link to={"/our-story"}>Our Story</Link></li>
                    <li><Link to={"/contact-us"}>Contact Us</Link></li>
                    <li><Link to={"/faq"}>FAQ</Link></li>
                    <li><Link to={"/catering"}>Catering</Link></li>
                    <li><Link to={"/"}>Terms</Link></li>
                </ul>
                <div className="footer-email mx-auto my-0 w-[88%]">
                    <h2 className='font-bold text-xl'>Fresh Blaked Emails</h2>
                    <form className='flex flex-col pt-1 pb-5' action="post">
                        <label htmlFor="email">Email</label>
                        <input className='border-2 rounded-md border-white bg-[#322F30] px-2 py-[6px]' type="email" name="email" id="email" placeholder='email@example.com'/>
                    </form>
                    <div className="social-media flex justify-center hidden">
                        <svg className="icon icon-instagram w-[40px]"
                    aria-hidden="true" focusable="false"  viewBox="0 0 20 20">
  <path fill="currentColor" fill-rule="evenodd" d="M13.23 3.492c-.84-.037-1.096-.046-3.23-.046-2.144 0-2.39.01-3.238.055-.776.027-1.195.164-1.487.273a2.43 2.43 0 0 0-.912.593 2.486 2.486 0 0 0-.602.922c-.11.282-.238.702-.274 1.486-.046.84-.046 1.095-.046 3.23 0 2.134.01 2.39.046 3.229.004.51.097 1.016.274 1.495.145.365.319.639.602.913.282.282.538.456.92.602.474.176.974.268 1.479.273.848.046 1.103.046 3.238.046 2.134 0 2.39-.01 3.23-.046.784-.036 1.203-.164 1.486-.273.374-.146.648-.329.921-.602.283-.283.447-.548.602-.922.177-.476.27-.979.274-1.486.037-.84.046-1.095.046-3.23 0-2.134-.01-2.39-.055-3.229-.027-.784-.164-1.204-.274-1.495a2.43 2.43 0 0 0-.593-.913 2.604 2.604 0 0 0-.92-.602c-.284-.11-.703-.237-1.488-.273ZM6.697 2.05c.857-.036 1.131-.045 3.302-.045 1.1-.014 2.202.001 3.302.045.664.014 1.321.14 1.943.374a3.968 3.968 0 0 1 1.414.922c.41.397.728.88.93 1.414.23.622.354 1.279.365 1.942C18 7.56 18 7.824 18 10.005c0 2.17-.01 2.444-.046 3.292-.036.858-.173 1.442-.374 1.943-.2.53-.474.976-.92 1.423a3.896 3.896 0 0 1-1.415.922c-.51.191-1.095.337-1.943.374-.857.036-1.122.045-3.302.045-2.171 0-2.445-.009-3.302-.055-.849-.027-1.432-.164-1.943-.364a4.152 4.152 0 0 1-1.414-.922 4.128 4.128 0 0 1-.93-1.423c-.183-.51-.329-1.085-.365-1.943C2.009 12.45 2 12.167 2 10.004c0-2.161 0-2.435.055-3.302.027-.848.164-1.432.365-1.942a4.44 4.44 0 0 1 .92-1.414 4.18 4.18 0 0 1 1.415-.93c.51-.183 1.094-.33 1.943-.366Zm.427 4.806a4.105 4.105 0 1 1 5.805 5.805 4.105 4.105 0 0 1-5.805-5.805Zm1.882 5.371a2.668 2.668 0 1 0 2.042-4.93 2.668 2.668 0 0 0-2.042 4.93Zm5.922-5.942a.958.958 0 1 1-1.355-1.355.958.958 0 0 1 1.355 1.355Z" clip-rule="evenodd"></path>
                        </svg>
                        <svg className="icon icon-facebook w-[40px]" 
                        aria-hidden="true" focusable="false"  viewBox="0 0 20 20">
  <path fill="currentColor" d="M18 10.049C18 5.603 14.419 2 10 2c-4.419 0-8 3.603-8 8.049C2 14.067 4.925 17.396 8.75 18v-5.624H6.719v-2.328h2.03V8.275c0-2.017 1.195-3.132 3.023-3.132.874 0 1.79.158 1.79.158v1.98h-1.009c-.994 0-1.303.621-1.303 1.258v1.51h2.219l-.355 2.326H11.25V18c3.825-.604 6.75-3.933 6.75-7.951Z"></path>
                        </svg>
                        <svg className="icon icon-tiktok w-[40px]"
                         aria-hidden="true" focusable="false"  viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.511 1.705h2.74s-.157 3.51 3.795 3.768v2.711s-2.114.129-3.796-1.158l.028 5.606A5.073 5.073 0 1 1 8.213 7.56h.708v2.785a2.298 2.298 0 1 0 1.618 2.205L10.51 1.705Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="social-media flex justify-center my-3">
                        <svg className="icon icon-instagram w-[40px]"
                    
                    aria-hidden="true" focusable="false"  viewBox="0 0 20 20">
  <path fill="currentColor" fill-rule="evenodd" d="M13.23 3.492c-.84-.037-1.096-.046-3.23-.046-2.144 0-2.39.01-3.238.055-.776.027-1.195.164-1.487.273a2.43 2.43 0 0 0-.912.593 2.486 2.486 0 0 0-.602.922c-.11.282-.238.702-.274 1.486-.046.84-.046 1.095-.046 3.23 0 2.134.01 2.39.046 3.229.004.51.097 1.016.274 1.495.145.365.319.639.602.913.282.282.538.456.92.602.474.176.974.268 1.479.273.848.046 1.103.046 3.238.046 2.134 0 2.39-.01 3.23-.046.784-.036 1.203-.164 1.486-.273.374-.146.648-.329.921-.602.283-.283.447-.548.602-.922.177-.476.27-.979.274-1.486.037-.84.046-1.095.046-3.23 0-2.134-.01-2.39-.055-3.229-.027-.784-.164-1.204-.274-1.495a2.43 2.43 0 0 0-.593-.913 2.604 2.604 0 0 0-.92-.602c-.284-.11-.703-.237-1.488-.273ZM6.697 2.05c.857-.036 1.131-.045 3.302-.045 1.1-.014 2.202.001 3.302.045.664.014 1.321.14 1.943.374a3.968 3.968 0 0 1 1.414.922c.41.397.728.88.93 1.414.23.622.354 1.279.365 1.942C18 7.56 18 7.824 18 10.005c0 2.17-.01 2.444-.046 3.292-.036.858-.173 1.442-.374 1.943-.2.53-.474.976-.92 1.423a3.896 3.896 0 0 1-1.415.922c-.51.191-1.095.337-1.943.374-.857.036-1.122.045-3.302.045-2.171 0-2.445-.009-3.302-.055-.849-.027-1.432-.164-1.943-.364a4.152 4.152 0 0 1-1.414-.922 4.128 4.128 0 0 1-.93-1.423c-.183-.51-.329-1.085-.365-1.943C2.009 12.45 2 12.167 2 10.004c0-2.161 0-2.435.055-3.302.027-.848.164-1.432.365-1.942a4.44 4.44 0 0 1 .92-1.414 4.18 4.18 0 0 1 1.415-.93c.51-.183 1.094-.33 1.943-.366Zm.427 4.806a4.105 4.105 0 1 1 5.805 5.805 4.105 4.105 0 0 1-5.805-5.805Zm1.882 5.371a2.668 2.668 0 1 0 2.042-4.93 2.668 2.668 0 0 0-2.042 4.93Zm5.922-5.942a.958.958 0 1 1-1.355-1.355.958.958 0 0 1 1.355 1.355Z" clip-rule="evenodd"></path>
                        </svg>
                        <svg className="icon icon-facebook w-[40px]" 
                        
                        aria-hidden="true" focusable="false"  viewBox="0 0 20 20">
  <path fill="currentColor" d="M18 10.049C18 5.603 14.419 2 10 2c-4.419 0-8 3.603-8 8.049C2 14.067 4.925 17.396 8.75 18v-5.624H6.719v-2.328h2.03V8.275c0-2.017 1.195-3.132 3.023-3.132.874 0 1.79.158 1.79.158v1.98h-1.009c-.994 0-1.303.621-1.303 1.258v1.51h2.219l-.355 2.326H11.25V18c3.825-.604 6.75-3.933 6.75-7.951Z"></path>
                        </svg>
                        <svg className="icon icon-tiktok w-[40px]"
                         
                         aria-hidden="true" focusable="false"  viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.511 1.705h2.74s-.157 3.51 3.795 3.768v2.711s-2.114.129-3.796-1.158l.028 5.606A5.073 5.073 0 1 1 8.213 7.56h.708v2.785a2.298 2.298 0 1 0 1.618 2.205L10.51 1.705Z"></path>
                        </svg>
                    </div>
        </footer>
    )
}