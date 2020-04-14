import {Unit} from '../../../projects/simple-course-core/src/lib/models/unit';
import {unit01} from './unit01';
import {unit02} from './unit02';
import {unit03} from './unit03';
import {unit04} from './unit04';
import {unit05} from './unit05';
import {unit06} from './unit06';
import {unit07} from './unit07';
import {Course} from '../../../projects/simple-course-core/src/lib/models/course';

export const course: Course = {
  author: ['Elizabeth Shivers'],
  colorScheme: [],
  date: "2020-04-08",
  description: "A continuing medical education/continuing professional development course in understanding and working with Transgender and Nonbinary patients.",
  title: "Transgender and Nonbinary Care from a Social Perspective",
  units: [unit01, unit02, unit03, unit04, unit05, unit06, unit07]

};
export const course2: Unit[] = [unit01, unit02, unit03, unit04, unit05, unit06, unit07];


