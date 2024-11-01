import Link from "next/link";
import React from "react";
import { Table, Accordion } from "react-bootstrap";
function CollapsibleRow({ data, defaultIsOpen = false, children }) {
  const [isOpen, setIsOpen] = React.useState(defaultIsOpen);

  return (
    <React.Fragment>
      <tr>
        <td
          colSpan={6}
          style={{ cursor: "pointer", backgroundColor: "#F7F8F8", padding: 25 }}
          className="header"
          onClick={() => setIsOpen(!isOpen)}
        >
          {data}
        </td>
        <td
          onClick={() => setIsOpen(!isOpen)}
          colSpan={1}
          style={{ cursor: "pointer", backgroundColor: "#F7F8F8", padding: 25 }}
        >
          {isOpen ? (
            <i className="lni lni-chevron-down"></i>
          ) : (
            <i className="lni lni-chevron-right"></i>
          )}
        </td>
      </tr>
      {isOpen && children}
    </React.Fragment>
  );
}
export default function TableCoin({
  headline,
  subheadline,
  lists,
  scrollAnchorId,
}) {
  return (
    <section id={scrollAnchorId} className="table-coin pt-30">
      <div className="container" style={{ overflowX: "auto" }}>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-title text-center">
              <h2>{headline}</h2>
              <p>{subheadline}</p>
            </div>
          </div>
        </div>
        <Table
          className="container"
          striped={false}
          bordered={false}
          hover={false}
        >
          <thead>
            <tr>
              <th>Currency pairs</th>
              <th>
              Current Price /
                <br />
                basic point
              </th>

              <th>
              Open Price /
                <br />
                basic point
              </th>

              <th>
              Price Up /
                <br />
                basic point
              </th>
              <th>
              Price Down /
                <br />
                basic point
              </th>
              <th>
                Swap buy /
                <br />
                basic point
              </th>
              <th>
                Swap sell /
                <br />
                basic point
              </th>
            </tr>
          </thead>
          <tbody>
            <CollapsibleRow data="Major currencies" defaultIsOpen={true}>
              {lists
                ?.filter((item) => item.status === "1")
                ?.map((coin) => (
                  <tr key={coin.id}>
                    <td>
                      {coin.symbol}
                      <br />{" "}
                      <span
                        style={{
                          color: "green",
                          fontStyle: "italic",
                          fontSize: 13,
                        }}
                      >
                        Free overnight fees / Expansion available
                      </span>
                    </td>
                    <td>${coin.data.value}</td>
                    <td>${coin.data.lastdaily}</td>
                    <td>${coin.data.lo}</td>
                    <td>${coin.data.hi}</td>
                    <td>{coin.data.change1}%</td>
                    <td>{coin.data.change2}%</td>
                  </tr>
                ))}
            </CollapsibleRow>
            <CollapsibleRow data="Secondary currencies">
              {lists
                ?.filter((item) => item.status === "2")
                ?.map((coin) => (
                  <tr key={coin.id}>
                    <td>
                      {coin.symbol}
                      <br />{" "}
                      <span
                        style={{
                          color: "green",
                          fontStyle: "italic",
                          fontSize: 13,
                        }}
                      >
                        {" "}
                        Free overnight fees / Expansion available
                      </span>
                    </td>
                    <td>${coin.data.value}</td>
                    <td>${coin.data.lastdaily}</td>
                    <td>${coin.data.lo}</td>
                    <td>${coin.data.hi}</td>
                    <td>{coin.data.change1}%</td>
                    <td>{coin.data.change2}%</td>
                  </tr>
                ))}
            </CollapsibleRow>
            <CollapsibleRow data="Rare currency">
              {lists
                ?.filter((item) => item.status === "0")
                ?.map((coin) => (
                  <tr key={coin.id}>
                    <td>
                      {coin.symbol}
                      {/* <br />{" "}
                      <span
                        style={{
                          color: "green",
                          fontStyle: "italic",
                          fontSize: 13,
                        }}
                      >
                        {" "}
                        Miễn phí phí qua đêm / Mở rộng khả dụng
                      </span> */}
                    </td>
                    <td>${coin.data.value}</td>
                    <td>${coin.data.lastdaily}</td>
                    <td>${coin.data.lo}</td>
                    <td>${coin.data.hi}</td>
                    <td>{coin.data.change1}%</td>
                    <td>{coin.data.change2}%</td>
                  </tr>
                ))}
            </CollapsibleRow>
          </tbody>
        </Table>
      </div>
    </section>
  );
}
