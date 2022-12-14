import * as React from 'react';
import { CartItemType } from '../types';
import { ReactComponent as MinusSign } from '../assets/circle-minus-solid.svg';
import { ReactComponent as PlusSign } from '../assets/circle-plus-solid.svg';
import { ReactComponent as CrossSign } from '../assets/circle-xmark-solid.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../store/cart/cart.selector';
import { addItemToCart, clearItemInCart, subtractItemInCart } from '../store/cart/cart.action';

type CartItemProp = {
  item: CartItemType;
  orderPage?: boolean;
};

const CartItem: React.FC<CartItemProp> = ({ item, orderPage }) => {
  const { displayName, price, qty, size, color, imageUrl } = item;
  const dispatch = useDispatch();
  const itemsInCart = useSelector(selectCartItems);

  const addOne: React.MouseEventHandler<HTMLOrSVGElement> = (e) => {
    e.stopPropagation();
    dispatch(addItemToCart(itemsInCart, item, true));
  };

  const deductOne: React.MouseEventHandler<HTMLOrSVGElement> = (e) => {
    e.stopPropagation();
    dispatch(subtractItemInCart(itemsInCart, item));
  };

  const removeItem: React.MouseEventHandler<HTMLOrSVGElement> = (e) => {
    e.stopPropagation();
    dispatch(clearItemInCart(itemsInCart, item));
  };

  return (
    <>
      {/* cart item - when smaller than sm */}
      {!orderPage && (
        <section className="grid grid-cols-cart text-xs xs:text-sm sm:hidden">
          <div className="col-span-1 col-start-1 row-span-2 row-start-1 flex justify-center p-2">
            <img className="w-2/3" src={imageUrl} alt="" />
          </div>
          <div className="col-span-3 col-start-2 row-span-1 row-start-1 p-2 xs:pt-4">
            {displayName}
            <div className="text-xs">&nbsp;&nbsp;color: {color} </div>
            <div className="text-xs">&nbsp;&nbsp;size: {size} </div>
          </div>
          <div className="col-span-1 col-start-2 row-span-1 row-start-2 flex justify-center">
            {price}
          </div>
          <div className="col-span-1 col-start-3 row-span-1 row-start-2 flex justify-center">
            <MinusSign onClick={deductOne} className="h-4 w-4 cursor-pointer">
              -
            </MinusSign>
            <div className="ml-1">{qty}</div>
            <PlusSign onClick={addOne} className="ml-1 h-4 w-4 cursor-pointer">
              -
            </PlusSign>
          </div>
          <div className="col-span-1 col-start-4 row-span-1 row-start-2 flex justify-center font-bold">
            {`${qty * price}`}
          </div>
        </section>
      )}
      {/* cart item - when larger than sm */}
      <section
        className={`${
          orderPage
            ? 'grid grid-cols-cartXL-order text-xs lg:text-sm xl:text-base'
            : 'hidden grid-cols-cartXL text-sm sm:grid lg:text-base xl:text-lg'
        } items-center`}
      >
        <div className="p-2">
          <img className={orderPage ? 'w-2/3 lg:w-full' : 'w-2/3'} src={imageUrl} alt="" />
        </div>
        {!orderPage && (
          <div className="w-4/5">
            {displayName}
            <div className="text-xs lg:text-sm xl:text-base">&nbsp;&nbsp;color: {color}</div>
            <div className="text-xs lg:text-sm xl:text-base">&nbsp;&nbsp;size: {size}</div>
          </div>
        )}
        {orderPage && (
          <div className="w-4/5 text-xs sm:text-base lg:text-sm">
            {displayName}&nbsp;[{color}, {size}]
          </div>
        )}
        <div className={orderPage ? 'text-sm' : 'text-base'}>{price}</div>
        <div className="flex items-center">
          {!orderPage && <MinusSign onClick={deductOne} className="h-4 w-4 cursor-pointer" />}
          <div className={orderPage ? 'text-sm' : 'text-base'}>&nbsp;{qty}&nbsp;</div>
          {!orderPage && <PlusSign onClick={addOne} className="ml-1 h-4 w-4 cursor-pointer" />}
        </div>
        <div className={orderPage ? 'text-sm' : 'text-base'}>{`${qty * price}`}</div>
        {!orderPage && (
          <CrossSign onClick={removeItem} className="flex h-5 w-5 cursor-pointer justify-center" />
        )}
      </section>
      <hr />
    </>
  );
};

export default React.memo(CartItem);
