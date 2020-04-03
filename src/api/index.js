/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-03-26 10:36:46
 * @LastEditors: zero
 * @LastEditTime: 2020-03-26 11:03:17
 */
import { axios } from "@/utils/request";
import Qs from "qs";

export function getLatestRelease (parameter) {
  return axios({
    url: "sys/appUpdate/getLatestRelease",
    method: "post",
    data: Qs.stringify(parameter)
  });
}