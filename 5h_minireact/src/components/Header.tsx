import React from 'react';

export const Header = () => {

	return (
		<header>
			<div className="top-image">
				<div className="top-belt"><img src="./img/logo.jpg" alt="" />
					<ul>
						<li><a href="./news">お知らせ</a></li>
						<li><a href="./access">交通案内</a></li>
						<li><a href="./reserve">宿泊予約</a></li>
						<li><a href="./contact">お問い合わせ</a></li>
					</ul>
				</div>
				<div className="head-image">
					<img src="./img/header_image.jpg" alt ="胡紛温泉メイン画像" className="top-image" />
				</div>
				<ul className="head-menu">
					<li><a href="./"><img src="./img/nav_01.jpg" alt="ホーム" /></a></li>
					<li><a href="./spa"><img src="./img/nav_02.jpg" alt="温泉" /></a></li>
					<li><a href="./meal"><img src="./img/nav_03.jpg" alt="料理" /></a></li>
					<li><a href="./room"><img src="./img/nav_04.jpg" alt="客室" /></a></li>
					<li><a href="./factory"><img src="./img/nav_05.jpg" alt="館内" /></a></li>
					<li><a href="./access"><img src="./img/nav_06.jpg" alt="交通" /></a></li>
				</ul>    
			</div>
		</header>
	);
}