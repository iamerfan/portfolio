import Image from "next/image";
import {
  BiIdCard,
  BiLocationPlus,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoRedux,
  BiLogoSass,
  BiLogoTypescript,
  BiTime,
} from "react-icons/bi";
import { PiCertificateBold } from "react-icons/pi";
import { FaUniversity } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";

export const projects = [
  {
    src: "/project1.webp",
    title: "فروشگاه میراث",
    link: "https://miras-iamerfan.vercel.app",
    code: "https://github.com/iamerfan/miras",
    sections: [
      {
        title: "موضوع",
        data: "فروشگاه آنلاین لباس ، محصولات آرایشی و محصولات ورزشی",
      },
      {
        title: "مدت زمان تولید",
        data: "1 ماه",
      },
      {
        title: "تکنولوژی ها",
        data: (
          <>
            <BiLogoReact color="blue" />
            <BiLogoTypescript color="blue" />
            <Image alt="" src={"/next.svg"} width={50} height={20} />{" "}
            <BiLogoSass color="purple" />
            <BiLogoRedux color="purple" />
            <BiLogoMongodb color="green" />
          </>
        ),
      },
    ],
  },
  {
    reverse: true,
    src: "/project2.webp",
    title: "پنل مدیریت ورزشکاران",
    link: "https://sport-app-iamerfan.vercel.app",
    code: "https://github.com/iamerfan/sport-app",
    sections: [
      {
        title: "موضوع",
        data: "پنل مدیریت کاربران و ورزشکاران ",
      },
      {
        title: "مدت زمان تولید",
        data: "1 هفته",
      },
      {
        title: "تکنولوژی ها",
        data: (
          <>
            <Image alt="" src={"/next.svg"} width={50} height={20} />
            <BiLogoReact color="blue" />
            <BiLogoSass color="purple" />
            <BiLogoMongodb color="green" />
            <BiLogoNodejs color="green" />
          </>
        ),
      },
    ],
  },
  {
    vpn: true,
    src: "/project3.webp",
    title: "وب اپلیکیشن فیلم و سریال",
    link: "https://movieapp-iamerfan.vercel.app",
    code: "https://github.com/iamerfan/movie-nextjs",

    sections: [
      {
        title: "موضوع",
        data: "مشاهده اطلاعات، عکس ها و تریلر های فیلم ها و سریال ها",
      },
      {
        title: "مدت زمان تولید",
        data: "1 ماه",
      },
      {
        title: "تکنولوژی ها",
        data: (
          <>
            <BiLogoReact color="blue" />
            <BiLogoJavascript color="orange" />
            <Image alt="" src={"/next.svg"} width={50} height={20} />{" "}
            <BiLogoSass color="purple" />
            <BiLogoNodejs color="green" />
          </>
        ),
      },
    ],
  },
];
export const links = ["درباره من", "مهارت ها", "نمونه کارها", "تماس با من"];
export const features = [
  {
    title: "HTML",
    logo: <BiLogoHtml5 color="orange" />,
    titleLeft: "طراحی و توسعه طرح های HTML",
    description: "طراحی و توسعه و کد نویسی طرح های HTML به صورت نوین و حرفه ای",
    percentage: 98,
    time: "1397 - تاکنون",
  },
  {
    title: "CSS",
    logo: <BiLogoCss3 color="blue" />,
    titleLeft: "طراحی و توسعه طرح ها و استایل های CSS",
    description:
      "طراحی و توسعه و کد نویسی استایل های CSS به صورت اینلاین و ماژولار",
    percentage: 95,
    time: "1397 - تاکنون",
  },
  {
    title: "Javascript",
    logo: <BiLogoJavascript color="orange" />,
    titleLeft: "طراحی و توسعه اپلیکیشن ها با Javascript ",
    description:
      "اضافه کردن قابلیت های مختلف به وب اپلیکیشن ها با Vanila javascript",
    percentage: 95,
    time: "1397 - تاکنون",
  },
  {
    title: "NodeJS",
    logo: <BiLogoNodejs color="green" />,
    titleLeft: "طراحی و توسعه اپلیکیشن های بک اند با NodeJS ",
    description:
      "ساخت Api و اتصال به فرانت اند ، اتصال به پایگاه داده و مدیریت اطلاعات با NodeJS",
    percentage: 80,
    time: "1400 - تاکنون",
  },
  {
    title: "React",
    logo: <BiLogoReact color="rgb(43, 132, 227)" />,
    titleLeft: "طراحی و کد نویسی کامپوننت های React",
    description: "طراحی و کد نویسی وب اپلیکیشن های React محور",
    percentage: 95,
    time: "1399 - تاکنون",
  },
  {
    title: "Next.Js",
    logo: (
      <Image alt="" src={"/next.svg"} width={80} height={40} color="purple" />
    ),
    titleLeft: "طراحی و کد نویسی Next.JS",
    description: "طراحی و توسعه سرور کامپوننت ها و وب اپلیکیشن های SSR",
    percentage: 99,
    time: "1400 - تاکنون",
  },
  {
    title: "Redux",
    logo: <BiLogoRedux color="purple" />,
    titleLeft: "توسعه کامپوننت های با Redux",
    description: "توسعه کامپوننت ها و مدیریت State ها در Redux",
    percentage: 95,
    time: "1401 - تاکنون",
  },
  {
    title: "MongoDB",
    logo: <BiLogoMongodb color="green" />,
    titleLeft: "طراحی و توسعه پایگاه های داده با MongoDB",
    description: "طراحی پایگاه های داده ، مدیریت اطلاعات و امنیت اطلاعات ",
    percentage: 85,
    time: "1401 - تاکنون",
  },
  {
    title: "React Native",
    logo: (
      <Image
        alt=""
        src={"/react-native.svg"}
        width={70}
        height={70}
        color="purple"
      />
    ),
    titleLeft: "توسعه وب اپلیکیشن های کراس پلتفرم با React Native ",
    description: "طراحی و توسعه اپلیکیشن های IOS و Android با React Native",
    percentage: 20,
    time: "1402 - تاکنون",
  },
];
export const abouts = [
  {
    icon: <BiLocationPlus />,
    title: "محل سکونت ",
    data: "ایران ، اهواز",
  },
  {
    icon: <FaUniversity />,
    title: "تحصیلات",
    data: "مهندسی کامپیوتر",
  },
  {
    icon: <BiTime />,
    title: "سن",
    data: "25 سال",
  },
  {
    icon: <BiIdCard />,
    title: "خدمت وظیفه",
    data: "دارای کارت پایان خدمت",
  },
  {
    icon: <PiCertificateBold />,
    title: "فنی حرفه ای",
    data: "دارای مدرک فنی حرفه ای",
  },
  {
    icon: <MdWorkHistory />,
    title: "سابقه کار",
    data: "3 سال",
  },
];
