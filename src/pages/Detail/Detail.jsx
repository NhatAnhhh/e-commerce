import { ImageChildren, ImageParent } from '@/components/ImageDetailPage';
import React from 'react';
import styled from 'styled-components';
import image1 from '@/assets/img/detail/image1.svg';
import image2 from '@/assets/img/detail/image2.svg';
import image3 from '@/assets/img/detail/iamge3.svg';
import image4 from '@/assets/img/detail/imageMain.svg';
import { Breadcrumb, Button, Col, Image, InputNumber, Radio, Row, Space, Tag, message } from 'antd';
import { TitleSmall } from './TitleSmall';
import { RadioColor } from '@/components/CardImg';
import { Freeship } from './Freeship';
import { TitleFilter } from '@/components/ProductShop/TitleFilter';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useRef } from 'react';
import ModalGallery from './ModalGallery';
import ImageGallery from 'react-image-gallery';
import ProductLoader from './ProductLoader';
import productService from '@/services/productService';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAsyncProductToCarts } from '@/redux/order/orderAction';
import { formatMoney } from '@/utils/formatMoney';

const StyledMainDetailPage = styled.div`
  padding-top: 114.66px;

  padding-bottom: 70px;
  .view-detail-book {
    padding-top: 57px;
  }
  .bottom-img {
    background-color: #f8f9fb;
    padding: 25px 27px;
    margin-top: 71px;
  }
  .wrapper-img-parent {
    display: flex;
    gap: 69px;
  }
  .right {
    width: 493px;
  }
  .tag {
    color: #000;
    /* Oswald Regular 24 */
    font-family: Oswald;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 68px;
    width: 75px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: #f0f2f2;
    margin-top: 12px;
  }
  .name {
    color: #000;
    font-family: Oswald;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: 56px;
  }
  .wrapper-color {
    display: flex;
    gap: 20px;
  }
  .style-radio-size {
    width: 46px;
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: Oswald;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 68px;
    text-transform: uppercase;
  }
  .wrapper-size {
    width: 250px;
  }
  .wrapper-price {
    display: flex;
    gap: 24px;
    .input-number {
      width: 119px;
      height: 43px;
      display: flex;
      align-items: center;
      font-size: 16px;
      font-weight: 800;
    }
  }
  .price {
    font-family: Oswald;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    color: #000;
  }
  .btn-wrapper {
    margin-top: 40px;
    display: flex;
    gap: 10px;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 221px;
    height: 50px;
    font-family: Oswald;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;

    text-transform: uppercase;
    color: #828282;
  }
  .btn-add-card {
    background-color: black;
    color: white;
    transition: all 0.25s linear;
  }
  .btn-add-card:hover {
    background-color: #eb5757;
    border: none;
    color: white;
  }
  .title-bottom {
    border-bottom: 1px solid #c4c4c4;
  }
  .content-bottom {
    display: flex;
    gap: 52px;
  }
  .content-bottom-left {
    width: 567px;
  }
  .content-bottom-right {
    width: 567px;
  }
  .content-bottom-desc {
    color: #3f3f3f;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  .original-image,
  .thumbnail-image {
    cursor: pointer;
  }
  .image-gallery-content {
    height: 100%;
  }
  .wrap-radio {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledMainColor = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${props => props.colorpicker};
`;

const Detail = () => {
  let location = useLocation();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(state => Boolean(state.auth.token));
  const navigate = useNavigate();

  const [dataProduct, setDataProduct] = useState();
  const [valueQuantity, setQuantity] = useState(1);

  const [valueSize, setValueSize] = useState(0);
  const [valueColor, setValueColor] = useState(0);

  let params = new URLSearchParams(location.search);
  const id = params?.get('id');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, id]);

  const fetchProduct = async id => {
    const res = await productService.getProductById(id);
    if (res) {
      res.items = getImages(res);

      setTimeout(() => {
        setDataProduct(res);
      }, 2000);
    }
  };
  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  const getImages = raw => {
    const images = [];
    if (raw.listImage) {
      raw.listImage.map(item => {
        images.push({
          original: item.path,
          thumbnail: item.path,
          originalHeight: '700px',
          originalClass: 'original-image',
          thumbnailClass: 'thumbnail-image',
        });
      });
    }
    return images;
  };

  const [isOpenModalGallery, setIsOpenModalGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const refGallery = useRef(null);

  const images = dataProduct?.items ?? [];

  const handleOnClickImage = () => {
    //get current index onClick
    // alert(refGallery?.current?.getCurrentIndex());
    setIsOpenModalGallery(true);
    setCurrentIndex(refGallery?.current?.getCurrentIndex() ?? 0);
    // refGallery?.current?.fullScreen()
  };

  // useEffect(() => {
  //   initFacebookSDK();
  // }, []);

  const onChange = value => {
    console.log('changed', value);
  };

  const handleAddToCart = (valueQuantity, dataProduct) => {
    if (isAuthenticated) {
      if (valueColor === 0 || valueSize === 0) {
        message.error('Vui long chon size hoac color');
        return;
      } else {
        dispatch(
          addAsyncProductToCarts({
            productID: dataProduct.id,
            sizeID: valueSize,
            colorID: valueColor,
            quantity: valueQuantity,
            price: dataProduct.price,
          }),
        );
      }
    } else {
      navigate('/login');
    }
  };

  const onChangeQuantity = value => {
    setQuantity(value);
  };

  return (
    <StyledMainDetailPage>
      <div className="view-detail-book" style={{ maxWidth: 1440, margin: '0 auto', minHeight: 'calc(100vh - 150px)' }}>
        {dataProduct && dataProduct.id ? (
          <Row gutter={[20, 20]}>
            <Col md={10} sm={0} xs={0}>
              <ImageGallery
                ref={refGallery}
                showNav={false}
                items={images}
                showPlayButton={false} //hide play button
                showFullscreenButton={false} //hide fullscreen button
                renderLeftNav={() => <></>} //left arrow === <> </>
                renderRightNav={() => <></>} //right arrow === <Col> </>
                slideOnThumbnailOver={true} //onHover => auto scroll images
                onClick={() => handleOnClickImage()}
              />
            </Col>
            <Col md={14} sm={24}>
              <Col md={0} sm={24} xs={24}>
                <ImageGallery
                  ref={refGallery}
                  items={images}
                  showPlayButton={false} //hide play button
                  showFullscreenButton={false} //hide fullscreen button
                  renderLeftNav={() => <></>} //left arrow === <> </>
                  renderRightNav={() => <></>} //right arrow === <> </>
                  showThumbnails={false}
                />
              </Col>
              <Col span={24}>
                <div className="right">
                  <Breadcrumb
                    items={[
                      {
                        title: 'Home',
                      },
                      {
                        title: 'Womens Dress',
                      },
                      {
                        title: 'Angels malu',
                      },
                    ]}
                  />
                  <Tag className="tag" color="default">
                    {dataProduct.catalog.catalogName}
                  </Tag>
                  <div className="name">{dataProduct.name}</div>
                  <TitleSmall text="SELECT COLOR" />
                  <div className="wrapper-color">
                    <Radio.Group onChange={e => setValueColor(e.target.value)} value={valueColor}>
                      {dataProduct.colors.map(item => {
                        return (
                          <Space
                            key={item.id}
                            direction="horizontal"
                            style={{ marginRight: '7px', marginTop: '7px' }}
                            wrap
                          >
                            <Radio.Button className="wrap-radio" value={item.id}>
                              <StyledMainColor colorpicker={item.name}></StyledMainColor>
                            </Radio.Button>
                          </Space>
                        );
                      })}
                    </Radio.Group>
                  </div>
                  <TitleSmall text="SELECT SIZE" />
                  <div className="wrapper-size">
                    <Radio.Group onChange={e => setValueSize(e.target.value)} value={valueSize} buttonStyle="solid">
                      <Space direction="horizontal" wrap>
                        {dataProduct.sizes.map(item => {
                          return (
                            <Radio.Button key={item.id} className="style-radio-size" value={item.id}>
                              {item.name}
                            </Radio.Button>
                          );
                        })}
                      </Space>
                    </Radio.Group>
                  </div>
                  <div className="wrapper-price">
                    <div>
                      <TitleSmall text="QUANTITY" />
                      <InputNumber
                        defaultValue={1}
                        size="large"
                        min={1}
                        max={dataProduct.totalQuantity}
                        onChange={onChangeQuantity}
                        className="input-number"
                      />
                    </div>
                    <div>
                      <TitleSmall text="price" />
                      <div className="price">{formatMoney(dataProduct.price)}</div>
                    </div>

                    <div>
                      <TitleSmall text="Total Price" />
                      <div className="price">{formatMoney(dataProduct.price * valueQuantity)}</div>
                    </div>
                  </div>
                 
                  <div className="btn-wrapper">
                    <Button onClick={() => handleAddToCart(valueQuantity, dataProduct)} className="btn-add-card btn">
                      ADD TO CARD
                    </Button>
                    <Button className="btn-save btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                        <path
                          d="M9.88849 13.3396L9.88845 13.3395L9.88666 13.3412L9.84757 13.3785L9.80272 13.3396L9.80269 13.3396C8.09177 11.8591 6.6744 10.6323 5.6843 9.52797C4.69351 8.42288 4.13917 7.44949 4.13917 6.47658C4.13917 5.1331 5.19452 4.12331 6.60917 4.12331C7.69994 4.12331 8.76019 4.7997 9.13328 5.71271L9.14599 5.7438H9.17957H10.5188H10.5524L10.5651 5.71271C10.9381 4.7997 11.9984 4.12331 13.0892 4.12331C14.5038 4.12331 15.5592 5.1331 15.5592 6.47658C15.5592 7.44948 15.0048 8.42287 14.0132 9.52795C13.0222 10.6323 11.603 11.859 9.88849 13.3396ZM9.81639 15.3378L9.84917 15.3662L9.88195 15.3378L10.9259 14.4315C12.7789 12.829 14.3212 11.4942 15.3996 10.2359C16.4786 8.97704 17.0992 7.78814 17.0992 6.47658C17.0992 4.32495 15.3321 2.65001 13.0892 2.65001C11.8417 2.65001 10.6439 3.19501 9.84917 4.05406C9.05447 3.19501 7.85662 2.65001 6.60917 2.65001C4.36628 2.65001 2.59917 4.32495 2.59917 6.47658C2.59917 7.78814 3.21977 8.97704 4.29871 10.2359C5.37718 11.4942 6.91948 12.829 8.77246 14.4315L9.81639 15.3378Z"
                          fill="#3F3F3F"
                          stroke="#828282"
                          strokeWidth="1"
                        />
                      </svg>
                      <div>SAVE</div>
                    </Button>
                  </div>
                  <Freeship />
                </div>
              </Col>
            </Col>
          </Row>
        ) : (
          <ProductLoader />
        )}

        <div className="bottom-img">
          <div className="title-bottom">
            <TitleFilter titleName="Details" />
          </div>
          <div className="content-bottom">
            <div className="content-bottom-left">
              <TitleSmall text="ABOUT PRODUCT" />
              <div className="content-bottom-desc">
                Cool off this summer in the Mini Ruffle Smocked Tank Top from our very own LA Hearts. This tank features
                a smocked body, adjustable straps, scoop neckline, ruffled hems, and a cropped fit.
              </div>
              <TitleSmall text="ADVANTAGES" />
              <ul>
                <li>Smocked body</li>
                <li>Adjustable straps</li>

                <li>Scoop neckline</li>
                <li>Ruffled hems</li>
                <li>Cropped length</li>
                <li>Model is wearing a small</li>
                <li>Machine washable</li>
              </ul>
              <TitleSmall text="ADVANTAGES" />
              <ul>
                <li>Smocked body</li>
                <li>Adjustable straps</li>

                <li>Scoop neckline</li>
                <li>Ruffled hems</li>
                <li>Cropped length</li>
                <li>Model is wearing a small</li>
                <li>Machine washable</li>
              </ul>
            </div>
            <div className="content-bottom-right">
              <TitleSmall text="SHIPPING" />
              <div className="content-bottom-desc">
                We offer Free Standard Shipping for all orders over $75 to the 50 states and the District of Columbia.
                The minimum order value must be $75 before taxes, shipping and handling. Shipping fees are
                non-refundable. Please allow up to 2 business days (excluding weekends, holidays, and sale days) to
                process your order. Processing Time + Shipping Time = Delivery Time
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalGallery
        isOpen={isOpenModalGallery}
        setIsOpen={setIsOpenModalGallery}
        currentIndex={currentIndex}
        items={images}
        title={'hardcode'}
      />
    </StyledMainDetailPage>
  );
};

export default Detail;
