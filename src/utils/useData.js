import {
  strategicPlanning,
  appDevelopment,
  digitalMarketing,
  documentProduction,
  researchAnalysis,
  people,
} from '../images/image_barrel';

const Data = class {
  #tab_data = [
    {
      icon: strategicPlanning.graph,
      image: strategicPlanning.strategic,
      tab_title: "Strategic Planning",
      title: "Strategic Planning & Corporate Communication",
      content: "Preparation of organisational communications strategies and their implementation plans. Our consultants work on campaign and advocacy programmes together with promotional brochures pamphlets, newsletters, concept and materials. As a bonus, we can craft and disseminate target messages and institution specific communication policies."
    },
    {
      icon: digitalMarketing.lightBulb,
      image: digitalMarketing.marketing,
      tab_title: "Digital Marketing",
      title: "Digital & Content Marketing",
      content: "Formulating strategies that could best serve your business and run digital campaigns to promote them. We specialize in search engine optimization with a means of improving the rank of your website. Even small business without websites can still count on us for online presence audits. Our services range from email marketing, content marketing, social media marketing, data visualization, market research, lead generation and so much more. We help you retain your customers while acquiring new ones."
    },
    {
      icon: documentProduction.contract,
      image: documentProduction.document,
      tab_title: "Document Production",
      title: "Content, Article ,Report Writing & Production",
      content: "Our writing services are nothing short of exemplary. We assist you to construct your thoughts and turn them on to paper. We draft reports, website content, articles for your blog, proofread and supervise your entire production. Additionally, our editorial services are unmatched in the industry today from review, editing, advise and pre press services from design and illustration concepts to choice pictures."
    },
    {
      icon: researchAnalysis.magnifier,
      image: researchAnalysis.research,
      tab_title: "Research & Analysis",
      title: "Research, Policy Development, Review & Analysis",
      content: "Talk to us and let us know whether you or your organization/business are in need of leading and coordinating policy development processes with stakeholders, company specific policy review or socio economic policy issues in Kenya and East Africa. Additionally, we carry out niche specific research, baseline surveys and in depth sector studies."
    },
    {
      icon: appDevelopment.smartphone,
      image: appDevelopment.appDev,
      tab_title: "Application Development",
      title: "Web & Mobile Development",
      content: "A great team of young and versatile developers to meet all your business application needs. Talk to us if you need website design services, website development, website redesign, website hosting and android applications to fit your business and personal needs."
    }
  ]

  #testimonial_data = [
    {
      name: "Mila Kunis",
      occupation: "Creative Director",
      image: people.person1,
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iure necessitatibus minima odio nulla quaerat rem dolores quibusdam. Aspernatur beatae nesciunt nam dolore odio explicabo, nihil delectus quae mollitia! Doloremque?",
    },
    {
      name: "Chadwick Boseman",
      occupation: "Design Manager",
      image: people.person2,
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iure necessitatibus minima odio nulla quaerat rem dolores quibusdam. Aspernatur beatae nesciunt nam dolore odio explicabo, nihil delectus quae mollitia! Doloremque?",
    },
    {
      name: "Kendrick Lamar",
      occupation: "Co founder/CEO",
      image: people.person3,
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iure necessitatibus minima odio nulla quaerat rem dolores quibusdam. Aspernatur beatae nesciunt nam dolore odio explicabo, nihil delectus quae mollitia! Doloremque?",
    },
  ];

  constructor() {
    this.#tab_data = this.#tab_data;
    this.#testimonial_data = this.#testimonial_data;
  }

  get tab_data() {
    return this.#tab_data;
  }

  get testimonial_data() {
    return this.#testimonial_data;
  }
}

const useData = new Data();

export default useData;