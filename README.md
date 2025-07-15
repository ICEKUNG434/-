<!DOCTYPE html>
<html lang="th">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>กีฬาที่ฉันชอบ - แบดมินตัน</title>

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet" />
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />

    <style>
        /* พื้นฐาน */
        html,
        body {
            height: 100%;
            margin: 0;
            padding: 0;
            font-family: 'Kanit', sans-serif;
            background-image: url('./ภาพพื้นหลัง/480b6a15-dcdc-4162-b3a9-6dc296f5a0b4_large.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            color: #fff;
            overflow-x: hidden;
        }

        /* แอนิเมชัน fade-in */
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* หน้า Standby */
        #standby {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.6);
            flex-direction: column;
            text-align: center;
            animation: fadeIn 1.2s ease forwards;
            opacity: 0;
        }

        /* ปุ่ม standby สวยงาม */
        #enter-btn {
            transition: background-color 0.3s ease, transform 0.3s ease;
        }

        #enter-btn:hover {
            background-color: #e0a800;
            transform: scale(1.05);
        }

        /* วงกลมหมุน (spinner) */
        #loading-spinner {
            display: none;
            width: 3rem;
            height: 3rem;
            margin-top: 20px;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg)
            }

            100% {
                transform: rotate(360deg)
            }
        }

        /* เนื้อหาเว็บหลักซ่อนตอนโหลด */
        #main-content {
            display: none;
            animation: fadeIn 1s ease forwards;
        }

        .overlay {
            background-color: rgba(0, 0, 0, 0.65);
            padding: 2rem;
            border-radius: 1rem;
            max-width: 1000px;
            margin: auto;
            animation: fadeIn 1s ease forwards;
        }

        /* ภาพ carousel */
        .carousel-image {
            height: 300px;
            object-fit: cover;
            width: 100%;
            border-radius: 0.75rem;
            transition: transform 0.3s ease;
        }

        .carousel-image:hover {
            transform: scale(1.05);
        }

        /* การ์ด */
        .card {
            background-color: #222;
            color: #fff;
            border: 1px solid #444;
            border-radius: 12px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(255, 193, 7, 0.7);
        }

        .card img {
            height: 180px;
            object-fit: cover;
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
            transition: transform 0.3s ease;
        }

        .card img:hover {
            transform: scale(1.1);
        }

        .card-title,
        .card-text,
        li {
            color: #ffc107;
        }

        /* ปุ่ม */
        .btn-primary {
            background-color: #ffc107;
            border-color: #ffc107;
            color: #000;
            transition: background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }

        .btn-primary:hover {
            background-color: #e0a800;
            border-color: #d39e00;
            color: #000;
            transform: scale(1.05);
        }

        /* แบนเนอร์ประกาศ */
        .announcement {
            background-color: #ffc107;
            color: #000;
            padding: 0.5rem 1rem;
            text-align: center;
            font-weight: bold;
            font-size: 1.1rem;
            user-select: none;
        }

        .announcement a {
            color: inherit;
            text-decoration: none;
            transition: text-shadow 0.3s ease;
        }

        .announcement a:hover {
            text-shadow: 0 0 8px #406fad, 0 0 12px #38738f;
        }

        /* Footer */
        footer {
            background-color: #000;
            padding: 1rem;
            text-align: center;
            margin-top: 2rem;
            font-size: 0.9rem;
            color: #ccc;
            user-select: none;
        }
    </style>
</head>

<body>

    <!-- หน้ารอ (Standby) -->
    <div id="standby">
        <h1 class="mb-4">🏸 ยินดีต้อนรับสู่เว็บไซต์ แบดมินตัน</h1>
        <button id="enter-btn" class="btn btn-warning btn-lg" onclick="enterSite()">เข้าสู่เว็บไซต์</button>

        <!-- Spinner ซ่อนก่อน -->
        <div id="loading-spinner" class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

    <!-- เนื้อหาเว็บหลัก -->
    <div id="main-content">
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#">🏸 กีฬาที่ฉันชอบ</a>
            </div>
        </nav>

        <!-- Banner -->
        <div class="announcement">
            <a href="https://bwfthailandopen.com" target="_blank" rel="noopener noreferrer">
                📣 แบดมินตัน BWF Thailand Open 2025
            </a>
        </div>

        <!-- Main Section -->
        <main>
            <section class="container mt-5">
                <div class="overlay">
                    <div class="row">
                        <!-- Carousel -->
                        <div class="col-md-6 mb-4 mb-md-0">
                            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel"
                                data-bs-interval="2200">
                                <div class="carousel-inner shadow">
                                    <div class="carousel-item active">
                                        <img src="./ภาพประกอบ/นักแบดมินตันชายเดี่ยว.jpg" class="carousel-image"
                                            alt="ภาพ 1" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="./ภาพประกอบ/LINE_ALBUM_Day 1 คนไทย_240130_2.jpg"
                                            class="carousel-image" alt="ภาพ 2" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="./ภาพประกอบ/733171.jpg" class="carousel-image" alt="ภาพ 3" />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <!-- Text -->
                        <div class="col-md-6">
                            <h2 class="text-warning">ประวัติแบดมินตัน?</h2>
                            <p> เป็นกีฬาที่เล่นได้ทั้งแบบเดี่ยวและคู่
                                ผู้เล่นต้องตีลูกขนไก่ให้ข้ามตาข่ายลงในเขตสนามฝั่งตรงข้าม หากอีกฝ่ายรับไม่ได้ ตีออก
                                หรือติดตาข่าย จะเสียแต้ม
                                ฝ่ายที่ได้แต้มจะเป็นผู้เสิร์ฟในลูกต่อไป แข่งแบบ 3 เกม ใครชนะ 2 ใน 3 เกมถือว่าชนะ
                                โดยแต่ละเกมเล่นถึง 21 แต้ม ต้องชนะห่าง 2 แต้ม (สูงสุดไม่เกิน 30 แต้ม)</p>
                            <ul>
                                <li>ฝึกสมาธิและไหวพริบ</li>
                                <li>ช่วยให้สุขภาพแข็งแรง</li>
                                <li>เล่นได้ทั้งเดี่ยวและทีม</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Cards -->
                    <div class="row mt-4">
                        <div class="col-12 col-md-4 mb-3">
                            <div class="card h-100">
                                <img src="./ภาพประกอบ/istockphoto-1790909997-612x612.jpg" class="card-img-top"
                                    alt="อุปกรณ์ที่ใช้" />
                                <div class="card-body">
                                    <h5 class="card-title">อุปกรณ์ที่ใช้ในกีฬานี้</h5>
                                    <ul>
                                        <li>ไม้แบดมินตัน</li>
                                        <li>ลูกขนไก่ (พลาสติกหรือขนจริง)</li>
                                        <li>รองเท้าและชุดกีฬา</li>
                                    </ul>
                                    <a href="https://3badmintonkk.wordpress.com/2017/02/02/"
                                        class="btn btn-primary">อ่านต่อ</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 mb-3">
                            <div class="card h-100">
                                <img src="./ภาพประกอบ/badminton-benefits2.jpg" class="card-img-top" alt="ประโยชน์" />
                                <div class="card-body">
                                    <h5 class="card-title">ประโยชน์ของกีฬานี้</h5>
                                    <ul>
                                        <li>พัฒนาการทางด้านร่างกาย </li>
                                        <li>พัฒนาการทางด้านจิตใจ </li>
                                        <li>ฝึกทักษะด้านการตัดสินใจ </li>
                                    </ul>
                                    <a href="https://www.milo.co.th/all-sports/" class="btn btn-primary">อ่านต่อ</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 mb-3">
                            <div class="card h-100">
                                <img src="./ภาพประกอบ/15615410138925.jpg" class="card-img-top" alt="มารยาทผู้เล่น" />
                                <div class="card-body">
                                    <h5 class="card-title">มารยาทผู้เล่นของกีฬานี้</h5>
                                    <ul>
                                        <li>ต้องมีน้ำใจเป็นนักกีฬาอยู่เสมอ </li>
                                        <li>ใช้คำพูดที่สุภาพในการแข่งขัน </li>
                                        <li>พร้อมที่จะให้อภัยซึ่งกันและกัน</li>
                                    </ul>
                                    <a href="https://appbad5937.wixsite.com/mysite/blank-17"
                                        class="btn btn-primary">อ่านต่อ</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>

        <!-- Footer -->
        <footer>
            © 2025 โดย นาย อดิชาติ ใจสวน ปวส.1 ชท. 68319010029 (วิทยาลัยเทคนิคเชียงใหม่)
        </footer>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <script>
        function enterSite() {
            const btn = document.getElementById('enter-btn');
            const spinner = document.getElementById('loading-spinner');

            // ซ่อนปุ่ม และโชว์ spinner
            btn.style.display = 'none';
            spinner.style.display = 'inline-block';

            // ดีเลย์ 0.9 วินาที แล้วแสดงหน้าหลัก
            setTimeout(() => {
                document.getElementById('standby').style.display = 'none';
                const main = document.getElementById('main-content');
                main.style.display = 'block';
                main.style.animation = 'fadeIn 1s ease forwards';
            }, 900);
        }
    </script>
</body>

</html>
