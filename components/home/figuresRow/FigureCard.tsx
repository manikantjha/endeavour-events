interface IFigrueCard {
  objFigrue: {
    figure: string;
    description: string;
  };
}

export default function FigureCard(props: IFigrueCard) {
  return (
    <div className="text-center">
      <div className="block p-6 bg-white border border-gray-200 rounded-lg hover:bg-gray-100">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-500">
          {props.objFigrue.figure}
        </h5>
        <p className="font-normal text-gray-700">
          {props.objFigrue.description}
        </p>
      </div>
    </div>
  );
}
