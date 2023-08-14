import { Tabs } from 'antd';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import TagsViewAction from './tagViewAction';
import { addTag, removeTag, setActiveTag } from '../../redux/tagsview/tagsViewSlice';

const TagsView = () => {
  const { tags, activeTagId } = useSelector(state => state.tagsView);
  const { menuList } = useSelector(state => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // onClick tag
  const onChange = key => {
    const tag = tags.find(tag => tag.path === key);

    if (tag) {
      setCurrentTag(tag.path);
    }
  };

  // onRemove tag
  const onClose = targetKey => {
    dispatch(removeTag(targetKey));
  };

  const setCurrentTag = useCallback(
    id => {
      const tag = tags.find(item => {
        if (id) {
          return item.path === id;
        } else {
          return item.path === location.pathname;
        }
      });

      if (tag) {
        dispatch(setActiveTag(tag.path));
      }
    },
    [dispatch, location.pathname, tags],
  );

  useEffect(() => {
    navigate(activeTagId);
  }, [activeTagId]);

  useEffect(() => {
    if (menuList.length) {
      const menu = menuList.find(m => m.path === location.pathname);

      if (menu) {
        dispatch(
          addTag({
            ...menu,
            closable: menu.code !== 'dashboard',
          }),
        );
      }
    }
  }, [dispatch, location.pathname, menuList]);

  return (
    <div id="pageTabs" style={{ padding: '6px 4px' }}>
      <Tabs
        tabBarStyle={{ margin: 0 }}
        onChange={onChange}
        activeKey={activeTagId}
        style={{ fontSize: '20px' }}
        size="large"
        type="editable-card"
        hideAdd
        onEdit={(targetKey, action) => action === 'remove' && onClose(targetKey)}
        tabBarExtraContent={<TagsViewAction />}
        items={tags.map(tag => {
          return {
            key: tag.path,
            closable: tag.closable,
            label: tag.label,
          };
        })}
      />
    </div>
  );
};

export default TagsView;
