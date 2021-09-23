import { useEffect } from "react";
import Topbar from "../topbar/Topbar";
import './OldCars.css';
const OldCars = () => {
    useEffect(()=>{
        document.title = "Buy Old Cars"
    },[]);
    return (
        <div>
            <Topbar />
            This is old cars page
            <div className="Page-Content">
                <div className="gridContainer">
                    <h2 className="heading">This is the heading</h2>
                    <div className="item">item number 1</div>
                    <div className="item">item number 2</div>
                    <div className="item">item number 3</div>
                    <div className="item">item number 4</div>
                    <div className="item">item number 5</div>
                    <div className="item">item number 6</div>
                    <div className="item">item number 7</div>
                    <div className="item">item number 8</div>
                    <div className="item">item number 9</div>
                    <div className="item">item number 10</div>
                    <div className="item">item number 11</div>
                    <div className="item">item number 12</div>
                    <div className="item">item number 13</div>
                    <div className="item">item number 14</div>
                    <div className="item">item number 15</div>
                    <div className="item">item number 16</div>
                    <div className="item">item number 17</div>
                    <div className="item">item number 18</div>
                    <div className="item">item number 19</div>
                    <div className="item">item number 20</div>
                </div>
                <div className="gridContainer"><h2 className="heading">This is the heading</h2>
                    <div className="item">item number 1</div>
                    <div className="item">item number 2</div>
                    <div className="item">item number 3</div>
                    <div className="item">item number 4</div>
                    <div className="item">item number 5</div>
                    <div className="item">item number 6</div>
                    <div className="item">item number 7</div>
                    <div className="item">item number 8</div>
                    <div className="item">item number 9</div>
                    <div className="item">item number 10</div>
                    <div className="item">item number 11</div>
                    <div className="item">item number 12</div>
                    <div className="item">item number 13</div>
                    <div className="item">item number 14</div>
                    <div className="item">item number 15</div>
                    <div className="item">item number 16</div>
                    <div className="item">item number 17</div>
                    <div className="item">item number 18</div>
                    <div className="item">item number 19 </div>
                    <div className="item">item number 20</div>
                </div>
                <div className="gridContainer long"><h2 className="heading">This is the heading</h2>
                    <div className="item">item number 1</div>
                    <div className="item">item number 2</div>
                    <div className="item">item number 3</div>
                    <div className="item">item number 4</div>
                    <div className="item">item number 5</div>
                    <div className="item">item number </div>
                    <div className="item">item number 7</div>
                    <div className="item">item number 8</div>
                    <div className="item">item number 9</div>
                    <div className="item">item number 10</div>
                    <div className="item">item number 11</div>
                    <div className="item">item number 12</div>
                    <div className="item">item number 13</div>
                    <div className="item">item number 14</div>
                    <div className="item">item number 15</div>
                    <div className="item">item number 16</div>
                    <div className="item">item number 17</div>
                    <div className="item">item number 18</div>
                    <div className="item">item number 19</div>
                    <div className="item">item number 20</div>
                </div>
                <div className="gridContainer"><h2 className="heading">This is the heading</h2>
                    <div className="item">item number 1</div>
                    <div className="item">item number 2</div>
                    <div className="item">item number 3</div>
                    <div className="item">item number 4</div>
                    <div className="item">item number 5</div>
                    <div className="item">item number 6</div>
                    <div className="item">item number 7</div>
                    <div className="item">item number 8</div>
                    <div className="item">item number 9</div>
                    <div className="item">item number 10</div>
                    <div className="item">item number 11</div>
                    <div className="item">item number 12</div>
                    <div className="item">item number 13</div>
                    <div className="item">item number 14</div>
                    <div className="item">item number 15</div>
                    <div className="item">item number 16</div>
                    <div className="item">item number 17</div>
                    <div className="item">item number 18</div>
                    <div className="item">item number 19 large text item number 19</div>
                    <div className="item">item number 20</div>
                </div>
            </div>
        </div>
    );
}
export default OldCars;