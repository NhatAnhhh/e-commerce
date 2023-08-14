import { viVN_globalTips } from './global';
import { viVN_tagsViewDropMenu } from './user/tagsViewDropMenu';
import { viVN_title } from './user/title';
import { viVN_avatorDropMenu } from './user/avatorDropMenu';
import { viVN_notice } from './notice';
import { viVN_guide } from './guide';
import { viVN_home } from './home';
import {viVN_blog} from "./blog"
import { viVN_admin } from './admin';

const vi_VN = {
  ...viVN_globalTips,
  ...viVN_tagsViewDropMenu,
  ...viVN_title,
  ...viVN_avatorDropMenu,
  ...viVN_notice,
  ...viVN_guide,
  ...viVN_home,
  ...viVN_blog,
  ...viVN_admin,
};

export default vi_VN;
