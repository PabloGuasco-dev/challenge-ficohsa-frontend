import ItemDetail from '../../../components/ItemDetail';

const ItemDetailPage = (props) => {
  return (
    <div>
      <ItemDetail id={props.params.id} />
    </div>
  );
};

export default ItemDetailPage;