import {Button, Card} from "react-bootstrap";

type StoreItemProps = {
    id: number,
    make: string,
    name: string,
    price: number,
    imgUrl: string
}

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined,{currency: "USD", style: "currency"})
function formatCurrency(price: number) {
    return CURRENCY_FORMATTER.format(price)
}

export function StoreItem({make, name, price, imgUrl}: StoreItemProps) {
    const quantity = 1
    return (
        <Card className="h-100">
            <Card.Img variant="top" height="200px" src={imgUrl} style={{objectFit: "cover"}}/>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{make} {name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100">+ Add To Cart</Button>
                    ) : (
                    <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                        <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                            <Button>-</Button>
                            <div>
                                <span className="fs-3">{quantity}</span> in cart
                            </div>
                            <Button>+</Button>
                        </div>
                        <Button variant="danger" size="sm">Remove</Button>
                    </div>)
                    }
                </div>
            </Card.Body>
        </Card>)
}