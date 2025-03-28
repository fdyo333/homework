// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
contract Enum{
  // 枚举
 enum Status {
  Pending,
  Shipped,
  Accepted,
  Rejected,
  Canceled
 }
 Status public status;

function get() public view returns(Status){
  return status;
}

function set(Status _status) public {
  status = _status;
}
function cancel() public {
  status = Status.Canceled;
}
}