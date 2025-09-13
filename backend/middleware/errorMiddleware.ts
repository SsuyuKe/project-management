import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { config } from '../config/app.config';
import { HTTPSTATUS } from '../config/http.config';
import { AppError, NotFoundException } from '../utils/appError';

// ======================
// Not Found Middleware
// ======================
export const notFound = (req: Request, res: Response, next: NextFunction) => {
  throw new NotFoundException(`Not Found - ${req.originalUrl}`);
};

// ======================
// Global Error Handler
// ======================
export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // 紀錄錯誤
  console.error(`Error Occured on Path: ${req.path}`, err);

  // 特殊錯誤處理：JSON 格式錯誤
  if (err instanceof SyntaxError) {
    return res.status(HTTPSTATUS.BAD_REQUEST).json({
      success: false,
      message: 'Invalid JSON format. Please check your request',
      code: HTTPSTATUS.BAD_REQUEST,
    });
  }

  // 如果 response 狀態碼還是 200，代表沒有特別設定錯誤碼，就改成 500（伺服器錯誤）
  const statusCode =
    err.statusCode ||
    (res.statusCode === HTTPSTATUS.OK ? HTTPSTATUS.INTERNAL_SERVER_ERROR : res.statusCode);

  return res.status(statusCode).json({
    // 設定 HTTP 狀態碼
    success: false,
    message: err?.message || 'Unknown error occured', // 回傳錯誤訊息
    code: statusCode,
    errorCode: (err as AppError).errorCode || undefined,
    stack: config.NODE_ENV === 'production' ? null : err.stack,
  });
  // 如果是 production 環境，就隱藏 stack（避免洩漏內部細節）
  // 如果是開發環境，就回傳 stack 方便 debug
};
