import {TextLesson} from '../../app/models/text-lesson';
import {VideoLesson} from '../../app/models/video-lesson';
import {Unit} from '../../app/models/unit';
import {LessonType} from '../../app/models/lesson';
import {ImageAsset, Position} from '../../app/models/image-asset';

let lesson0101: TextLesson =
  {
    id: 101,
    title: 'Introduction',
    type: LessonType.Text,
    sections: [
      {
        header: 'Welcome',
        body: 'Welcome to Transgender and Nonbinary Care from a Social Perspective. The goal of this course is to equip healthcare providers with a greater understanding of the transgender and nonbinary community from a predominantly social viewpoint, in order to improve the overall quality of patient care and encourage more inclusive and affirming clinical environments, as a deeper understanding of this unique patient population is key to providing the best quality of care possible.\nNote that while this course is designed as continuing professional development for healthcare providers, much of the content presented may be applicable to those outside of healthcare as well.',
        imageAsset: {
          'fileName': 'transgenderprideflag.jpg',
          'position':  Position.right,
          'altText': 'Transgender Pride Flag',
          'caption': 'Transgender Pride Flag'
        }
      },
      {
        'header': 'Course History',
        'body': 'This course was developed as a student project for the Georgia Institute of Technology, CS6440 Educational Technology. The design was laid out by a transgender individual and written from a community perspective rather than a typical clinical approach from non-transgender professionals, and as such only general information on clinical care is provided.'
      },
      {
        'header': 'Content Overview',
        'body': 'This course contains seven units covering the following topics. Unit 1 is an Introduction to Transgender and Nonbinary, providing a broad foundation for the rest of the content. Unit 2 focuses on what it means to be Transgender, going over terminology and general concepts related to transitional care. Unit 3 builds upon this to offer greater detail on what it means to be Nonbinary, what the relationship is between being transgender and nonbinary, as well as additional considerations that should be taken into account with nonbinary patients. Note that Transgender and Nonbinary are neither inherently inclusive nor exclusive, this will be discussed in more detail in Units 2 and 3. Unit 4 is designed to provide a brief overview of the issues that the Transgender and Nonbinary community faces socially with discrimination or marginalization, from cultural and legal perspectives alike. Unit 5 provides content on sexuality as it relates and does not relate to gender identity. Unit 6 goes into more detail on medical transition from a general perspective. Unit 7 brings together elements of the previous content areas, with recommendations on providing an inclusive and affirming environment for patients.',
      }
    ]
  };

let lesson0102: VideoLesson = {
  id: 102,
  type: LessonType.Video,
  title: "Why does this matter?",
  videoEmbedCode: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/t7xHamn5inQ\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n",
  transcript: "This is a demo only. No transcript available.",

};

let lesson0103: TextLesson = {
  id: 103,
  title: 'Introduction to Terminology',
  type: LessonType.Text,
  sections: [
    {
      header: 'Overview',
      body: 'One of the largest issues transgender and nonbinary patients face in accessing healthcare is in provider failure to understand the language of the transgender and nonbinary community. Being able to speak with patients accurately and inclusively can make all the difference in developing trust in the patient-provider relationship. Improper use of language can not only be othering, but actively harmful to patients mental or emotional wellbeing, far beyond what you may encounter with most patients. Of particular note are the exceedingly common interactions involving misgendering and deadnaming, which will both be discussed more in future units. Unfortunately, it is also common for medical terminology to lag behind social terminology, further complicating issues. In this unit we will only go over the most basic terms that should be known as a starting point to build upon for the following units, which each will provide a more robust look at terminology and communicating with transgender and nonbinary patients related to the topic of the unit. Before we continue, it must be understood that all terms should be self-applied. Never make assumptions that a word or phrase applies to an individual even if you are familiar with the common usage of a term and believe it applies, as ultimately these words are about personal identification rather than a strict definition. You should always allow a patient to state how they identify first, either through intake forms or directly in person, rather than labeling them yourself.'
    },
    {
      header: 'Transgender, Nonbinary, and Cisgender',
      body: 'There are three key terms that must be defined before anything else. Transgender, nonbinary, and cisgender. Most commonly, the word transgender refers to an individual whose gender identity does not align with the sex they were assigned at birth. Being nonbinary means that an individual’s gender identity is outside the male-female binary system. Nonbinary is not a third gender, but an encompassing term for someone who is at some point on a spectrum between male and female or neither male nor female at all. This may be in the form of a third gender, or it may be a statement of having no gender. Cisgender is a term that refers to someone whose gender identity aligns with their sex assigned at birth—that is to say, it is anyone who is not transgender or nonbinary. While it will eventually be given some qualifications to use, we employ the phrase “sex assigned at birth” here as starting terminology acknowledging what sex was observed at birth, in that it was a label applied by someone else base on observance of sex characteristics which did not accurately reflect an individual’s reality and which the individual had no say regarding.'
    },
    {
      header: 'Identity',
      body: 'The term identity is another simple phrase that deserves extra attention, and it is often one that can cause people to misunderstand the nature of what it means to be transgender. Many erroneously believe that the phrase “identify as” indicates that someone is not actually that thing. For example, if one were to say, “I identify as a woman”, many people may see this as a less absolute statement than simply saying “I am a woman”. Yet, the Oxford dictionary defines identity as “The fact of being who or what a person or thing is”. This is an important definition. When we say a transgender or nonbinary person identifies as something, it means they are that thing, no less so than a cis person of that same identity. Identity is the key sense of a person as an individual. Even cisgender people have a gender identity, it is simply one that aligns with their sex assigned at birth.'
    },
    {
      header: 'Transgender vs. Nonbinary',
      body: 'The relationship between being transgender and nonbinary also deserves extra consideration, and this will be a topic that is returned to throughout the course. While many people who identify as nonbinary also identify as transgender, this is far from always the case, and illustrates a prime example of why approaching people individually is important. Some transgender people are nonbinary, some transgender people are binary. Some nonbinary people identify as transgender, some do not. Note that neither of these terms is indicative of whether or not someone is seeking medical transition, which will be discussed further in the following units as well.',
      imageAsset: {
        'fileName': 'venndiagram.jpg',
        'position':  Position.left,
        'altText': 'Venn Diagram of Transgender and Nonbinary Overlap',
        'caption': 'This diagram is for illustrative purposes only and does not represent actual data.'
      }
    }
  ]
};

let lesson0104: TextLesson = {
  id: 103,
  title: 'Conclusion',
  type: LessonType.Text,
  sections: [
    {
      header: 'Study Recommendations',
      body: 'To close out this introductory unit we will take a look at the recommendations from a study conducted at the Max Rady College of Medicine at the University of Manitoba, in a final means to evidence the need for a course of this nature. The researchers performed a fairly small qualitative survey of 30 transgender patients and 11 physicians to identify lack of provider knowledge. The results reinforced what has been discussed previously, though what sets this study apart is the recommendations it provides for medical curriculum. This provided a partial model for what this course hopes to cover. These are the 9 recommendations provided by the study, which encompass providing basic information, training in language for interaction, major areas of medical care knowledge, suggestions on pedagogical approaches, and then an understanding of transphobia in society. For this course, we have opted to focus on the social recommendations. Predominantly, we will provide an overview of what it means to be transgender, training in in language and proper pronoun use for interaction with transgender patients, and an understanding of the nature of transphobia in society, all from a transgender perspective. '
    },
    { header: 'Moving to Unit 2',
      body: 'This is the end of unit 1. Unit 2 will cover more basic information on what it means to be Transgender and Transgender issues.'
    }
  ],
  citations: [
    {
      apaString: 'Deborah Mcphail, Marina Rountree-James, and Ian Whetter. "Addressing Gaps in Physician Knowledge regarding Transgender Health and Healthcare through Medical Education." Canadian Medical Education Journal 7.2 (2016): 70-78.'
    },
    {
      apaString: 'Deborah Mcphail, Marina Rountree-James, and Ian Whetter. "Addressing Gaps in Physician Knowledge regarding Transgender Health and Healthcare through Medical Education." Canadian Medical Education Journal 7.2 (2016): 70-78.'
    }
  ]
};
export const unit01: Unit = {
  title: "Introduction",
  order: 1,
  lessons: [lesson0101, lesson0102, lesson0103, lesson0104]
};
