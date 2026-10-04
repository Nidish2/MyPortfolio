/**
 * Public portfolio information. These values are intentionally versioned with
 * the application: they are public profile details, not secrets.
 */
export const siteConfig = {
  name: "Nidish",
  url: "https://i-am-nidish.vercel.app",
  email: "nidish2207@gmail.com",
  phone: "+91 8904316325",
  location: "Bangalore, India",
  resumePath: "/Resume.pdf",
  documentsUrl:
    "https://drive.google.com/drive/folders/1I6YTXnzbc1MPkk-26qYi4SEGaqARRfan?usp=sharing",
  forms: {
    submitUrl: "https://api.web3forms.com/submit",
  },
  social: {
    github: "https://github.com/Nidish2",
    linkedin: "https://www.linkedin.com/in/nidishofficial/",
    leetcode: "https://leetcode.com/u/nidish2207/",
    geeksForGeeks: "https://www.geeksforgeeks.org/profile/nidishpf3z",
    hackerRank: "https://www.hackerrank.com/profile/nidish2207",
    instagram: "https://www.instagram.com/_1_am_nidish/",
  },
} as const;
