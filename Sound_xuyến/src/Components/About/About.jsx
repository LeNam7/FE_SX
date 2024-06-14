import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className="about" id='about'>
            <div className="about-title">
                <h1>About Us</h1>
                <div className="stock-container"></div>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <div className='logo1'>
                        <h1>Sound</h1>
                        <h3>Xuyến</h3>
                    </div>
                </div>
                <div className="about-right">
                    <div className='about-para' style={{ color: "#fff" }}>
                        <p>Sự bùng nổ của Tiktok nói riêng và các nền tảng Short videos nói chung là minh chứng cho điều đó. Nhìn rộng hơn, “Video” là một trong số vô vàn các nội dung truyền thông như vậy. Trong đó, chất lượng âm thanh đóng góp vào 50% sự thành công của 1 video ở bất kỳ thể loại nào. </p>
                        <p>Sau nhiều nghiên cứu và tìm hiểu, Sound Xuyến chúng mình đã nhìn ra và thấu hiểu được nhu cầu sản xuất các nội dung truyền thông ngày nay, song song với sự cải thiện các yếu tố cơ bản giúp một sản phẩm trở nên hoàn hảo nhất.</p>
                    </div>
                    <div className="contact">
                        <div className="contact-title">
                            <p><span>Hotline:</span> 0971 870 712 - 088 689 1203</p>
                            <p><span>Email:</span> soundxuyen@gmail.com</p>
                            <p><span>Facebook:</span> <a style={{ color: "#fff", textDecoration: "none" }} href="https://www.facebook.com/soundxuyenlab">Sound Xuyến</a></p>
                            <p><span>Instagram:</span> <a style={{ color: "#fff", textDecoration: "none" }} href="https://www.instagram.com/soundxuyen.lab/">soundxuyen.lab</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About